import { Bowerman } from '../Bowerman';

describe('Bowerman class - data-driven tests', () => {
    test('Bowerman instance should be created', () => {
        const bowerman = new Bowerman('Player');
        expect(bowerman.name).toBe('Player');
        expect(bowerman.type).toBe('Bowerman');
        expect(bowerman.health).toBe(100);
        expect(bowerman.level).toBe(1);
        expect(bowerman.attack).toBe(25);
        expect(bowerman.defence).toBe(25);
    });
});
