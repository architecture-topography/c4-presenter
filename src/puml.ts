import fs from 'fs';
import PumlWriter from './pumlWriter';

export default class Puml {

    constructor(source: {}) {
    }

    print(writer: PumlWriter) {
        writer.write('foo');
    }
}
