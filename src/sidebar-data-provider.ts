import { TreeDataProvider, TreeItem } from 'vscode';

// const { SidebarTreeItem } = require('../sidebar_tree_item');

export class DataProvider implements TreeDataProvider<TreeItem> {
  private children = [];

  constructor() {}

  async getChildren() {
    // fetch data
    return this.children;
  }

  getParent() {
    return null;
  }

  getTreeItem(item: any) {
    return item;
  }

  refresh() {
    this.children = [];
    // TODO: Check exist
    // this._onDidChangeTreeData.fire();
  }
}
