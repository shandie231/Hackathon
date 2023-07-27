class Quokka {
    constructor(el) {
        this.node = document.createElement('img');
        this.node.setAttribute('id', 'quokkaImage');
        this.node.setAttribute('src', 'https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcRDfqzwb8Hx1np9C0FUTRXYL1pHQkCnOxrxFQ5mLksrruGEpook8GBd3XOghjJSoZqT6Sa-eFNLuVuLjk0');
        el.appendChild(this.node);
    }
changeQuokka(){
    const quokka = this.node;
let quokkaImages = [
        "https://i.natgeofe.com/k/b33a3db5-c82c-402f-90a5-0b11494d7739/quokka-OG.jpg",
        "https://natureconservancy-h.assetsadobe.com/is/image/content/dam/tnc/nature/en/photos/australia/Quokka_Sam-West.jpg?crop=0%2C886%2C2365%2C1773&wid=640&hei=480&scl=3.6953125",
        "https://img1.wsimg.com/isteam/ip/0b14ba68-b224-4294-8dd8-e360f8bf3cfd/101138578_167212421502972_1443206056242053120_.jpg",
        "https://quokkas.co/cdn/shop/articles/quokkahub-smile-daxon.jpg?v=1674013678",
        "https://animals.sandiegozoo.org/sites/default/files/inline-images/quokka06.jpg",
        "https://bestlifeonline.com/wp-content/uploads/sites/3/2019/07/what-is-quokka.jpg?quality=82&strip=all",
        "https://media.istockphoto.com/id/486456250/photo/quokka.jpg?s=612x612&w=0&k=20&c=yEGZPgo4V-v-f4omG_1oW7urV3pCHa3qbcdrqqhYoPA=",
        "https://quokkas.co/cdn/shop/files/quokka-hub-image-banner-daxon-wr.jpg?v=1667298190&width=1500",
        "https://allthatsinteresting.com/wordpress/wp-content/uploads/2020/03/quokka-leaf-smile.jpg"
    ];
        let randomIndex = Math.floor(Math.random() * quokkaImages.length);
        quokka.setAttribute('src', quokkaImages[randomIndex]);
    };

    
}