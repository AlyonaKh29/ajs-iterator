export class Team {
    constructor() {
        this.members = new Set();
    }

    add(character) {
        if (this.members.has(character)) {
            throw new Error('This character is on the team');
        }
        this.members.add(character);
    }

    addAll(...characters) {
        characters.forEach((person) => {
            this.members.add(person);
        })
    }

    toArray() {
        return Array.from(this.members);
    }

    [Symbol.iterator]() {
        const members = this.toArray();
        let nextIndex = 0;
        return {
            next: function() {
                if (nextIndex < members.length) {
                    const result = { value: members[nextIndex], done: false };
                    nextIndex++;
                    return result;
                } else {
                    return { value: undefined, done: true };
                }
            }
        };
    }
}
