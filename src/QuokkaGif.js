class QuokkaGif {
    constructor(el) {
        this.node = document.createElement('img');
        this.node.setAttribute('id', 'quokkaGif');
        this.node.setAttribute('src', 'src/gif/frame_0_delay-0.06s.gif');
        el.appendChild(this.node);
        this.node.index=0;
    }
        
cycleQuokka(){
    const quokka = this.node;
    
    let quokkaImages = [
        "src/gif/frame_0_delay-0.06s.gif",
        "src/gif/frame_1_delay-0.06s.gif",
        "src/gif/frame_2_delay-0.06s.gif",
        "src/gif/frame_3_delay-0.06s.gif",
        "src/gif/frame_4_delay-0.06s.gif",
        "src/gif/frame_5_delay-0.06s.gif",
        "src/gif/frame_6_delay-0.06s.gif",
        "src/gif/frame_7_delay-0.06s.gif",
        "src/gif/frame_8_delay-0.06s.gif",
        "src/gif/frame_9_delay-0.06s.gif",
        "src/gif/frame_10_delay-0.06s.gif",
        "src/gif/frame_11_delay-0.06s.gif",
        "src/gif/frame_12_delay-0.06s.gif",
        "src/gif/frame_13_delay-0.06s.gif",
        "src/gif/frame_14_delay-0.06s.gif",
        "src/gif/frame_15_delay-0.06s.gif",
        "src/gif/frame_16_delay-0.06s.gif",
        "src/gif/frame_17_delay-0.06s.gif",
        "src/gif/frame_18_delay-0.06s.gif",
        "src/gif/frame_19_delay-0.06s.gif",
        "src/gif/frame_20_delay-0.06s.gif",
        "src/gif/frame_21_delay-0.06s.gif",
        "src/gif/frame_22_delay-0.06s.gif",
        "src/gif/frame_23_delay-0.06s.gif",
        "src/gif/frame_24_delay-0.06s.gif",
        "src/gif/frame_25_delay-0.06s.gif",
        "src/gif/frame_26_delay-0.06s.gif",
        "src/gif/frame_27_delay-0.06s.gif",
        "src/gif/frame_28_delay-0.06s.gif",
        "src/gif/frame_29_delay-0.06s.gif",
        "src/gif/frame_30_delay-0.06s.gif",
        "src/gif/frame_31_delay-0.06s.gif",
        "src/gif/frame_32_delay-0.06s.gif",
        "src/gif/frame_33_delay-0.06s.gif",
        "src/gif/frame_34_delay-0.06s.gif",
        "src/gif/frame_35_delay-0.06s.gif",
        "src/gif/frame_36_delay-0.06s.gif",
        "src/gif/frame_37_delay-0.06s.gif",
        "src/gif/frame_38_delay-0.06s.gif",
        "src/gif/frame_39_delay-0.06s.gif",
        "src/gif/frame_40_delay-0.06s.gif",
        "src/gif/frame_41_delay-0.06s.gif",
        "src/gif/frame_42_delay-0.06s.gif",
        "src/gif/frame_43_delay-0.06s.gif",
        "src/gif/frame_44_delay-0.06s.gif",
        "src/gif/frame_45_delay-0.06s.gif",
        "src/gif/frame_46_delay-0.06s.gif",
        "src/gif/frame_47_delay-0.06s.gif",
        "src/gif/frame_48_delay-0.06s.gif",
        "src/gif/frame_49_delay-0.06s.gif",
        "src/gif/frame_50_delay-0.06s.gif",
        "src/gif/frame_51_delay-0.06s.gif",
        "src/gif/frame_52_delay-0.06s.gif",
        "src/gif/frame_53_delay-0.06s.gif",
        "src/gif/frame_54_delay-0.06s.gif",
        "src/gif/frame_55_delay-0.06s.gif",
        "src/gif/frame_56_delay-0.06s.gif",
        "src/gif/frame_57_delay-0.06s.gif",
        "src/gif/frame_58_delay-0.06s.gif",
        "src/gif/frame_59_delay-0.06s.gif",
        "src/gif/frame_60_delay-0.06s.gif",
        "src/gif/frame_61_delay-0.06s.gif",
        "src/gif/frame_62_delay-0.06s.gif",
        "src/gif/frame_63_delay-0.06s.gif",
        "src/gif/frame_64_delay-0.06s.gif",
        "src/gif/frame_65_delay-0.06s.gif",
        "src/gif/frame_66_delay-0.06s.gif",
        "src/gif/frame_67_delay-0.06s.gif",
        "src/gif/frame_68_delay-0.06s.gif",
        "src/gif/frame_69_delay-0.06s.gif",
        "src/gif/frame_70_delay-0.06s.gif",
        "src/gif/frame_71_delay-0.06s.gif",
        "src/gif/frame_72_delay-0.06s.gif",
        "src/gif/frame_73_delay-0.06s.gif",
        "src/gif/frame_74_delay-0.06s.gif",
        "src/gif/frame_75_delay-0.06s.gif",
        "src/gif/frame_76_delay-0.06s.gif",
        "src/gif/frame_77_delay-0.06s.gif",
        "src/gif/frame_78_delay-0.06s.gif",
        "src/gif/frame_79_delay-0.06s.gif",
        "src/gif/frame_80_delay-0.06s.gif",
        "src/gif/frame_81_delay-0.06s.gif",
        "src/gif/frame_82_delay-0.06s.gif",
        "src/gif/frame_83_delay-0.06s.gif",
        "src/gif/frame_84_delay-0.06s.gif",
        "src/gif/frame_85_delay-0.06s.gif",
        "src/gif/frame_86_delay-0.06s.gif",
        "src/gif/frame_87_delay-0.06s.gif",
        "src/gif/frame_88_delay-0.06s.gif",
        "src/gif/frame_89_delay-0.06s.gif",
        "src/gif/frame_90_delay-0.06s.gif",
        "src/gif/frame_91_delay-0.06s.gif",
        "src/gif/frame_92_delay-0.06s.gif",
        "src/gif/frame_93_delay-0.06s.gif",
        "src/gif/frame_94_delay-0.06s.gif",
        "src/gif/frame_95_delay-0.06s.gif",
        "src/gif/frame_96_delay-0.06s.gif"
    ];
    setInterval(function(){
        if(quokka.index === quokkaImages.length -1){
            quokka.index = 0;
            quokka.setAttribute('src', quokkaImages[quokka.index]);
            quokka.index++;
        }else{
        quokka.setAttribute('src', quokkaImages[quokka.index]);
        quokka.index++;
        }
    }, 70);
    }

    
}