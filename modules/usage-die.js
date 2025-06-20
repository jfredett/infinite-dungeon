/**
 * Rolls a usage die with syntax: UD<X, Y-, Z+>
 * @param {string} input - The usage die command (e.g. "UD<d8, 2-, 8+>")
 * @param {boolean} upgrading - has the upgrade condition been met?
 * @returns {Object} result info and chat message string
 */
// export async function rollUsageDie(input, upgrading) {
//   const regex = /UD<\s*(d\d+)\s*(?:,\s*(\d+)-)?\s*(?:,\s*(\d+)\+)?\s*>/i;
//   const match = input.match(regex);

//   if (!match) {
//     return { message: `Invalid Usage Die syntax. Use: UD<die, downgrade-, upgrade+>` };
//   }

//   const die = match[1];
//   const downgradeThreshold = match[2] ? parseInt(match[2]) : null;
//   const upgradeThreshold = match[3] ? parseInt(match[3]) : null;

//   const dieSize = parseInt(die.slice(1));
//   let roll = await new Roll(`1d${die}`).roll();
//   const rollResult = roll.total;

//   let outcome = `<strong>${die}</strong> rolled: <strong>${rollResult}</strong>`;
//   let nextDie = die;

//     if (upgrading) {
//       // Determine upgrade
//       if (upgradeThreshold && rollResult >= upgradeThreshold) {
//         nextDie = upgradeDie(die);
//         outcome += `Upgrade to <strong>${nextDie}</strong>`;
//       }
//     } else {
//       // Determine downgrade
//       if (downgradeThreshold && rollResult <= downgradeThreshold) {
//         nextDie = downgradeDie(die);
//         outcome += `Downgrade to <strong>${nextDie}</strong>`;
//       }
//     }

//   return {
//     die,
//     rollResult,
//     nextDie,
//     message: outcome
//   };
// }

// const diceOrder = ["d4", "d6", "d8", "d10", "d12", "d20"];

// function downgradeDie(current) {
//   const idx = diceOrder.indexOf(current.toLowerCase());
//   return idx > 0 ? diceOrder[idx - 1] : current;
// }

// function upgradeDie(current) {
//   const idx = diceOrder.indexOf(current.toLowerCase());
//   return idx < diceOrder.length - 1 ? diceOrder[idx + 1] : current;
// }


class UsageDieRollParser extends RollParser {
    constructor() {
        super();
        this.usageDieRegex = /UD<\s*(d\d+)\s*(?:,\s*(\d+)-)?\s*(?:,\s*(\d+)\+)?\s*>/i;
    }

    async parse(expression, data = {}) {
        // Replace all UD<...> expressions
        const replaced = expression.replace(this.usageDieRegex, (match, dieSize, downgradeThreshold, upgradeThreshold) => {
            const die = parseInt(dieSize.slice(1), 10);
            if (isNaN(die)) throw new Error(`Invalid die size in usage die: ${dieSize}`);
            return this._resolveUsageDie(die, downgradeThreshold, upgradeThreshold);
        });

        // Now parse the resulting expression using default behavior
        return super.parse(replaced, data);
    }

    _resolveUsageDie(die, downgrade, upgrade) {
        const roll = new Roll(`1d${die}`).roll({async: false});
        const result = roll.total;

        let newDie = die;

        if (!(downgrade || upgrade)) {
            throw "Die must have upgrade or downgrade condition";
        }

        // Handle downgrade
        if (downgrade && result <= parseInt(downgrade)) {
            newDie = this._nextDieDown(die);
        }

        // Handle upgrade
        if (upgrade && result >= parseInt(upgrade)) {
            newDie = this._nextDieUp(die);
        }

        return `1d${die} (rolled: ${result}) → ${newDie === die ? 'no change' : `new die: d${newDie}`}`;
    }

    _nextDieDown(die) {
        const dice = [4, 6, 8, 10, 12];
        const index = dice.indexOf(die);
        return index > 0 ? dice[index - 1] : die;
    }

    _nextDieUp(die) {
        const dice = [4, 6, 8, 10, 12];
        const index = dice.indexOf(die);
        return index < dice.length - 1 ? dice[index + 1] : die;
    }
}

