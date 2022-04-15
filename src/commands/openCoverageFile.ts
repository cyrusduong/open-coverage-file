import path = require("path");
import open = require("open");
import * as vscode from "vscode";

const openCoverageFile = async () => {
  const activeFileUri = vscode.window.activeTextEditor?.document.uri;
  if (!activeFileUri) {
    return;
  }

  const workspaceFolder = vscode.workspace?.workspaceFolders?.[0];
  if (!workspaceFolder) {
    return;
  }

  const activeFileRelativePath = vscode.workspace.asRelativePath(activeFileUri);
  if (activeFileUri.toString() === activeFileRelativePath) {
    return;
  }

  // Default coverage/lcov-report
  const coverageDir = vscode.workspace.getConfiguration("open-coverage-file").get("coverageDir");
  if (!coverageDir || typeof coverageDir !== "string") {
    return;
  }

  const coverageFile = vscode.Uri.joinPath(
    workspaceFolder.uri,
    coverageDir,
    workspaceFolder.name,
    `${activeFileRelativePath}.html`
  );

  const exists = await vscode.workspace.fs.stat(coverageFile);

  if (!exists) {
    return;
  }

  open(coverageFile.path);
};

export default openCoverageFile;
