import fs from 'fs';

export default class Puml {

    constructor(source: {}) {
    }

    print(filename: string) {
        const file = fs.createWriteStream(filename);

        file.write("@startuml Example 2\n");
        file.write("!includeurl https://raw.githubusercontent.com/RicardoNiepel/C4-PlantUML/release/1-0/C4_Container.puml\n\n");
  
        // @boxes.each { |box| box.print file }
  
        file.write("@enduml\n");
        file.end();
    }
}
