import path from 'path';

class PlayStore {
  constructor() {
    this._subscription = null;
  }
  subscribe(cb) {
    this._subscription = cb;
  }

  play() {
    var route = 'http://200.115.160.109:8000';
    this._subscription(route);
  }
}

class PlaylistStore {
  constructor() {
    this._subscription = null;
  }
  subscribe(cb) {
    this._subscription = cb;
  }
  load(files, file) {
    this._subscription(files, file);
  }

}

class DirectoryStore {
  get(dir) {
    if (!dir) dir = '';
    return fetch(path.join('/api/dir', dir));
  }
}

let playStore = new PlayStore();
let directoryStore = new DirectoryStore();
let playlistStore = new PlaylistStore();
export { playStore, directoryStore, playlistStore };