import Puml from './puml';
import PumlWriter from './pumlWriter';

describe('Json validation', () => {
  let puml: Puml;

  it('should print just the headers for an empty json input', async () => {
    const json = {};
    puml = new Puml(json);

    const MockedPumlWriter = <jest.Mock<PumlWriter>>PumlWriter;
    const mockedPumlWriter = <jest.Mocked<PumlWriter>>new MockedPumlWriter();
    mockedPumlWriter.write = jest.fn();

    puml.print(mockedPumlWriter);
    
    // assert
    expect(mockedPumlWriter.write).toHaveBeenCalledWith('foo');
    
  });
});
