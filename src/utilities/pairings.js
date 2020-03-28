/**
 * Generate schedule pairing all participants with all other participants (but not themselves)
 *
 * @param participants
 */
export const generateSchedule = (participants) => {
    let units = [];
    let schedule = [];

    for (let index = 1;index <= participants;index++) {
        units.push(index);
    }

    if (units.length % 2 !== 0) {
        units.push('bye');
    }

    let count = units.length;
    let half = Math.floor(count / 2);

    for (let turn = 0;turn < count - 1;turn++) {
        let pairings = [];
        for (let pairs = 0;pairs < half;pairs++) {
            pairings.push([units[pairs], units[count - pairs -1]]);
        }
        units.splice(1, 0, units.pop());
        schedule.push(pairings);
    }

    return schedule;
};