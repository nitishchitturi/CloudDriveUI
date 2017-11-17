import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const cdFile = [
      { parent_id: 0,
        name: 'Narco.txt',
        path: '/narco.txt',
        fileType: 2,
        size: 56,
    sha_256: 'nhryhhebnnnq1039848477'
       },
       { parent_id: 1,
        name: 'Bombasto.txt',
        path: '/bombasto.txt',
        fileType: 1,
        size: 34,
    sha_256: 'hyrthenqvffgdpook3616gybw'
       },
       { parent_id: 0,
        name: 'Magneta.txt',
        path: '/magneta.txt',
        fileType: 1,
        size: 890,
    sha_256: 'hhaytgeft64gbev6t52rgve'
       },
       { parent_id: 7,
        name: 'magma.txt',
        path: '/magma.txt',
        fileType: 1,
        size: 78,
    sha_256: 'husjjeythbtioandhbgu'
       },
    ];
    return {cdFile};
  }
}