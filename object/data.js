//membuat object literal
//jadi kita buat sebuah method , jadi method adalah sebuah function yang berada didalam object

// let mahasiswa = {
//     nama : 'Khalid ibrahim',
//     tenaga : 10,
//     makan : function(porsi){
//         this.energi = this.energi + porsi;
//         console.log(`Halo ${this.nama}, selamat makan ya `);
//     }
// }

//function declaration
// function Santri(nama , energi){
//     const methodSantri = {
//         makan : function (porsi){
//             this.energi += porsi;
//             console.log(`Halo ${this.nama}, selamat makan`);
//         },
    
//         main : function (jam){
//             this.energi -= jam;
//             console.log(`Halo ${this.nama}, selamat bermain`);
//         },


//         tidur : function (jam){
//             this.energi += jam * 2;
//             console.log(`Halo ${this.nama}, selamat beristirahat`);
//         }
//     }

//     let santri = Object.create(methodSantri  );
//     santri.nama = nama;
//     santri.energi = energi;
//     // santri.makan = methodSantri.makan;
//     // santri.main = methodSantri.main;
//     // santri.tidur = methodSantri.tidur;



//     return santri;
// }

// let khalid = Santri('Khalid ibrahim', 10);
// let rizky = Santri('Rizky Tigara', 20);


//Construtor function
//keyword new 

// function Santri(nama , energi){
//     // let santri = {};
//     this.nama = nama;
//     this.energi = energi;


//     this.makan = function (thisporsi){
//         this.energi += porsi;
//         console.log(`Halo ${this.nama}, selamat makan`);
//     }

//     this.main = function (jam){
//         this.energi -= jam;
//         console.log(`Halo ${this.nama}, selamat bermain`);
//     }
//     // return santri;
// }

// let khalid = new Santri('Khalid Ibrahim', 10);

//object create 



//prototype 
// function Santri(nama , energi){
//     this.nama = nama;
//     this.energi= energi;;
// }

// Santri.prototype.makan = function(porsi){
//     this.energi += porsi;
//     return  `Halo ${this.nama}, selamat makan`;
// }


// Santri.prototype.main = function(jam){
//     this.energi -= jam;
//     return `Halo ${this.nama}, selamat bermain`;
// }


// Santri.prototype.tidur = function(jam) {
//     this.energi += jam * 2;
//     return `Halo ${this.nama}, selamat beristirahat`;
// }

// let khalid = new Santri('Khalid ibrahim', 10);


//versi class
class Santri {
    constructor(nama, energi){
        this.nama = nama;
        this.energi = energi;
    }

    makan(porsi){
        this.energi += porsi;
        return  `Halo ${this.nama}, selamat makan`;
    }
    
    
    main(jam){
        this.energi -= jam;
        return `Halo ${this.nama}, selamat bermain`;
    }
    
    
    tidur(jam) {
        this.energi += jam * 2;
        return `Halo ${this.nama}, selamat beristirahat`;
    }

}


let khalid = new Santri('Khalid ibrahim', 10);