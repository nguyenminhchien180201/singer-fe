import EventEmitter from 'events';

const _emitter = new EventEmitter();// khong gioi han so nguoi nghe
_emitter.setMaxListeners(0);

export const emitter = _emitter;