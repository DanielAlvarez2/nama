import Navbar from '@/components/Navbar.jsx'
import NavbarFooter from '@/components/NavbarFooter.jsx'

export default function Yakiniku(){
  return(
    <>
      <Navbar page='yakiniku' />
      <br/>
      <div className="small-paper" style={{height:'auto',padding:'5px'}}>
        <br/>
        <h1>YAKINIKU</h1><br/>
        <h2 style={{textAlign:'center'}}>yaki=grilled niku=meat</h2> 
        <h2 style={{textAlign:'center'}}>a.k.a. "Japanese BBQ"</h2>
        <h2 style={{textAlign:'center'}}>ONLY First Sunday of the Month</h2>

        <br/>

        <img src='kimchi.jpg' />
        Osuzai / Side Dish<br/>
        House Made Kimchi(fermented vegetables)<br/>
        
        <br/>
        <img src='nanban-miso.jpg' />
        Osuzai / Side Dish<br/>
        Nanban Miso<br/>
        braised serrano pepper with miso<br/>
        chopped ginger and garlic<br/>
        serrano peppers are more spicy than jalapeños<br/>

        <br/>
        <img src='ohitashi.jpg' />
        Osuzai / Side Dish<br/>
        Ohitashi<br/>
        blanched spinach<br/>
        dashi oil and sesame oil<br/>
        nori<br/>
        bonito powder<br/>

        <br/>
        <img src='tsukemono-moriawase.jpg' />
        Osuzai / Side Dish<br/>
        Tsukemono Moriawase<br/>
        house made pickled vegetables<br/>

        <br/>
        <img src='aonori-kinoko.jpg' />
        Osuzai / Side Dish<br/>
        grilled mushrooms<br/>
        bonito flakes<br/>
        aonori seaweed<br/>
        soy sauce<br/>

        <br/>
        <img src='tofu-kaiso-salad.jpg' />
        Tofu Kaiso Salad<br/>
        house made tofu<br/>
        wakame seaweed<br/>
        tosaka nori<br/>
        white sesame dressing(pour tableside)<br/>
        kaiso=seaweed<br/>


        <br/>
        <img src='kalbi.jpg' />
        5 ounces<br/>
        Kalbi<br/>
        U.S. Prime Short Ribs<br/>
        
        <br/>
        <img src='gyu-tan.jpg' />
        4 ounces<br/>
        Gyū-Tan<br/>
        Gyū=cow<br/>
        Tan=tongue (from English)
        Beef Tongue<br/>
        marinated in shio koji<br/>
        <br/>
        
        <br/>
        <img src='hanasaki-zabuton.jpg' />
        5 ounces<br/>
        Hanasaki Zabuton<br/>
        Mishima U.S. Wagyu Chuck Flap Tail<br/>
        a.k.a. "Denver Steak"<br/>
        
        <br/>
        <img src='gem-lettuce.jpg' />
        1 serving to share<br/>

        <br/>
        <img src='garlic-rice.jpg' />
        Served 1 per guest<br/>
        
        <br/>
        <img src='sauces.jpg' />
        1 Negi Miso / Scallion Miso<br/>
        2 Yakiniku Tare: teriyaki sauce, garlic, sesame seeds, apple koji<br/>
        3 Sesame Oil & Black Pepper<br/>
        4 Lemon<br/>
        5 Maldon Salt: hand-harvested sea salt from England
        <br/>
        <br/>
        

      </div>{/* .small-paper */}
      <br/>
      <NavbarFooter page='yakiniku' />
    </>
  )
}