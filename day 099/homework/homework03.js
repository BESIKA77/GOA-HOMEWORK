const a = {
    name: "gela",
    lct: "თბილისი",
    bks: {
        t: "17 seqtemberi",
        a: "bondo",
        y: 2000
    },
    boks: function() {
        console.log(`bknm: ${this.bks.t}, avtr: ${this.bks.a}, come out yr: ${this.bks.y},find lctn ${this.lct}`);
    }
};
a.boks();