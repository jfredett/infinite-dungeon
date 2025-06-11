(async () => {
    let depth = await Dialog.prompt({
        content: `depth: <input id="depth" value=0 type="text"><br/>table:<input id="chart" type="text" value="SKY">`,
        callback: (html) => dummy = { value: html.find('input#depth').val(), chart: html.find('input#chart').val() }
    });
    console.log(depth);

    chart_roll = (depth, dice, subchart) => {
       // would be cool to pull the dice detail from the subchart
       let roll = new Roll(`${dice} + ${depth.value}`);
       let tab_name = `${depth.chart}-${subchart}`;
       console.log(tab_name);
       let tab = game.tables.getName(tab_name);

       tab.draw({roll: roll, rollMode: CONST.DICE_ROLL_MODES.BLIND})
    };

    

    console.log(chart_roll(depth, '1d20', 'Location'));
    console.log(chart_roll(depth, '1d20', 'Event'));
    console.log(chart_roll(depth, '1d20', 'Details'));
    console.log(chart_roll({value: 0, chart: depth.chart}, '1d20', 'Encounter'));

})();
