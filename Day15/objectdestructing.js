//Object Destructuring

const band = 
{
    bandName: "led zoppline",
    famousSong: "stariway to heaven",
    year:1999,

};
// const bandName = band.bandName;
// const famousSong = band.famousSong;
// console.log(bandName,famousSong);

//you can destructure above lines (shortcut)

   // const {bandName,famousSong} = band;
    // console.log(bandName);

    //Restprops gives you reaming object

    let {bandName,famousSong,...restProps} = band;
    console.log(restProps);