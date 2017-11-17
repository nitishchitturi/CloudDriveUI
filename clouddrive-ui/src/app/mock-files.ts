import { CDFile } from './cdfile';

export const CDFiles: CDFile[] = [
  { id: 1, name: 'folder1' ,path:'root/', filetype: 1, size: 200, sha: 'SHA1', parentid:0},
  { id: 2, name: 'folder2' ,path:'root/', filetype: 1, size: 200, sha: 'SHA2', parentid:0},
  { id: 3, name: 'folder3' ,path:'root/', filetype: 1, size: 200, sha: 'SHA3', parentid:0},
  { id: 4, name: 'file1' ,path:'root/', filetype: 0, size: 2000, sha: 'SHA4', parentid:0},
  { id: 5, name: 'file2' ,path:'root/', filetype: 0, size: 2000, sha: 'SHA5', parentid:0},
  { id: 6, name: 'folder4' ,path:'root/', filetype: 1, size: 200, sha: 'SHA6', parentid:0},
  { id: 7, name: 'file3' ,path:'root/', filetype: 0, size: 2000, sha: 'SHA7', parentid:0},
  { id: 8, name: 'folder5' ,path:'root/', filetype: 1, size: 200, sha: 'SHA8', parentid:0},
  { id: 9, name: 'file4' ,path:'root/', filetype: 0, size: 2000, sha: 'SHA9', parentid:0},
  { id: 20, name: 'file5' ,path:'root/', filetype: 0, size: 2000, sha: 'SHA10', parentid:0},
];