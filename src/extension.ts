import * as vscode from 'vscode';

import { DataProvider } from './sidebar-data-provider';

const registerSidebarTreeDataProviders = () => {
  const sidebarDataProvider = new DataProvider();

	vscode.window.registerTreeDataProvider('gitlabMRResolver', sidebarDataProvider);
};

export function activate(context: vscode.ExtensionContext) {

	registerSidebarTreeDataProviders();

	// TODO: Add extensions commands
	let disposable = vscode.commands.registerCommand('vscode-gitlab-mr-resolver.helloWorld', () => {
		vscode.window.showInformationMessage('Hello World from vscode-gitlab-mr-resolver!');
	});

	// TODO: Check utility
	context.subscriptions.push(disposable);
}

export function deactivate() {}
