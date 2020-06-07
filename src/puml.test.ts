import fs from 'fs';
import Puml from './puml';

describe('Puml', () => {
  let puml: Puml;

  it('should print just the headers for an empty json input', async () => {
    const json = {};
    puml = new Puml(json);

    puml.print('/tmp/output');
    
    let output = await fs.promises.readFile('/tmp/output', { encoding: 'utf-8' });
    expect(output.startsWith('@startuml'));
    
  });
});
