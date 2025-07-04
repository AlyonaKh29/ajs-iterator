import { Team } from "../team";
import { Bowerman } from '../Bowerman';

describe('Tests for the Team class', () => {

    let player1, player2, team;

    beforeEach(() => {
        player1 = new Bowerman('Tim');
        player2= new Bowerman('Ann');
        team = new Team('My team');
    })
    
    test('Add one character', () => {
        team.add(player1);
        expect(team.toArray()).toContain(player1);
    })

    test('re-add character', () => {
        team.add(player1);
        expect(() => team.add(player1)).toThrow('This character is on the team');
    })

    test('add some characters', () => {
        team.addAll(player1, player2);
        const arrayTeam = team.toArray();
        expect(Array.isArray(arrayTeam)).toBe(true);
        expect(arrayTeam).toContain(player1);
        expect(arrayTeam).toContain(player2);
        expect(arrayTeam.length).toBe(2);
    })
    
    test('the iterator returns the correct values ​​and terminates the iteration', () => {
        team.addAll(player1, player2);
        const expected = {
            value: {
                name: 'Tim',
                type: 'Bowerman',
                health: 100,
                level: 1,
                attack: 25,
                defence: 25
            },
            done: false
        };
        const iterator = team[Symbol.iterator]();
        expect(iterator.next()).toEqual(expected);
    })

    test('end of the iteration', () => {
        team.addAll(player1, player2);
        const iterator = team[Symbol.iterator]();
        iterator.next();
        iterator.next();
        expect(iterator.next()).toEqual({ value: undefined, done: true });
        expect(iterator.next()).toEqual({ value: undefined, done: true });
    })
})


