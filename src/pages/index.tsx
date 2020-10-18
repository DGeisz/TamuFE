import * as React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from 'react-bootstrap/Container';
import styles from './main.module.css';
import { SearchEntry } from "../components/SearchEntry";
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons/faSearch";


const json_data: search_entry[] = [{"url": "https://www.walmart.com/ip/Ayotu-New-iPad-9-7-inch-2018-2017-Case-Slim-Lightweight-Auto-Wake-Sleep-Smart-Stand-Protective-Cover-Translucent-Frosted-Back-Magnetic-Case-Release-T/307354125", "name": "Ayotu New iPad 9.7 inch 2018/2017 Case,Slim Lightweight Auto Wake/Sleep Smart Stand Protective Cover with Translucent Frosted Back Magnetic Case for New iPad 9.7 inch Release Tablet-The Champagne Gold", "category": "Home Page/Electronics/iPad & Tablets/Apple iPad Accessories/iPad Cases, Sleeves & Bags", "relevance": "(560, 0.9980732)"}, {"url": "https://www.walmart.com/ip/Alumni-Directory-University-of-Pittsburgh-V2-1787-1916-1916-9781120143303/770257676", "name": "Alumni Directory, University of Pittsburgh V2 : 1787-1916 (1916)", "category": "Home Page/Books/Literature & Fiction Books/Literary Collection Books/Literary Collections - General", "relevance": "(1304, 0.99800026)"}, {"url": "https://www.walmart.com/ip/Dibble-Publishing-Company-s-World-s-Columbian-Exposition-Pocket-Record-Book-Illustrated-with-Cuts-9780526929528/558701184", "name": "Dibble Publishing Company's World's Columbian Exposition Pocket Record Book : Illustrated with Cuts", "category": "UNNAV", "relevance": "(565, 0.99791)"}, {"url": "https://www.walmart.com/ip/Good-Things/503592139", "name": "Good Things", "category": "Home Page/Music/Rock Music on CD or Vinyl/All Rock Music", "relevance": "(629, 0.9978282)"}, {"url": "https://www.walmart.com/ip/The-Flower-Book-9780469827615/379364713", "name": "The Flower Book", "category": "UNNAV", "relevance": "(2492, 0.99769884)"}, {"url": "https://www.walmart.com/ip/2005-1-oz-Platinum-American-Eagle-MS-69-NGC/316091422", "name": "2005 1 oz Platinum American Eagle MS-69 NGC", "category": "UNNAV", "relevance": "(1936, 0.9975663)"}, {"url": "https://www.walmart.com/ip/Robert-Buchanan-9781103175635/329869471", "name": "Robert Buchanan", "category": "UNNAV", "relevance": "(687, 0.997564)"}, {"url": "https://www.walmart.com/ip/Hallelujah-to-the-Lamb-Debbye-Graafsma-Orchestra-Accompaniment/242459962", "name": "Hallelujah to the Lamb (Debbye Graafsma) Orchestra Accompaniment", "category": "Home Page/Musical Instruments/Instrument Accessories/All Musical Instrument Accessories", "relevance": "(2858, 0.99749327)"}, {"url": "https://www.walmart.com/ip/Transforming-Public-Services-by-Design-Re-Orienting-Policies-Organizations-and-Services-Around-People-9781409436256/55132453", "name": "Transforming Public Services by Design : Re-Orienting Policies, Organizations and Services Around People", "category": "Home Page/Books/Business & Money Books/General Business & Money Books", "relevance": "(2089, 0.9974816)"}, {"url": "https://www.walmart.com/ip/Builder-s-Hardware-A-Manual-for-Architects-Builders-and-House-Furnishers-9780548314548/788768465", "name": "Builder's Hardware : A Manual for Architects, Builders and House Furnishers", "category": "UNNAV", "relevance": "(2319, 0.99747825)"}, {"url": "https://www.walmart.com/ip/Symphonic-Tango/55692100", "name": "Symphonic Tango", "category": "Home Page/Music/Pop Music on CD or Vinyl/Easy Listening Music on CD or Vinyl", "relevance": "(1708, 0.9974766)"}, {"url": "https://www.walmart.com/ip/Real-Boys-Voices-9781435295667/10949563", "name": "Real Boys' Voices", "category": "Home Page/Books/Self-Help Books/Family & Relationships Self-Help Books/Parenting/General", "relevance": "(2910, 0.99746776)"}, {"url": "https://www.walmart.com/ip/Using-Tarot-for-Successful-Decisions-How-to-Get-Guidance-From-Tarot-Major-Arcana-eBook-9780463612415/392499386", "name": "Using Tarot for Successful Decisions: How to Get Guidance From Tarot Major Arcana - eBook", "category": "Home Page/Books/Self-Help Books/Personal Growth Self-Help Books/General", "relevance": "(1806, 0.9973454)"}, {"url": "https://www.walmart.com/ip/Silver-Lake-Or-the-Belle-of-Bayou-Luie-A-Tale-of-the-South-9781275670136/482182299", "name": "Silver Lake, Or, the Belle of Bayou Luie : A Tale of the South.", "category": "Home Page/Books/History Books/Americas History Books", "relevance": "(35, 0.99733657)"}, {"url": "https://www.walmart.com/ip/Whispers-eBook-9781465820686/707766564", "name": "Whispers - eBook", "category": "Home Page/Books/Literature & Fiction Books/Fiction Novels/Mystery, Thriller & Suspense Books/Mystery & Detective Books/Mystery & Detective Collections & Anthologies", "relevance": "(2527, 0.9972551)"}, {"url": "https://www.walmart.com/ip/Greenhouse-Management-Manual-Florists-Flower-Lovers-Forcing-Flowers-Vegetables-Fruits-Greenhouses-Propagation-9780342534036/775373748", "name": "Greenhouse Management, a Manual for Florists and Flower Lovers on the Forcing of Flowers, Vegetables and Fruits in Greenhouses and the Propagation and", "category": "UNNAV", "relevance": "(943, 0.9971765)"}, {"url": "https://www.walmart.com/ip/Reel-Rock-9-Valley-Uprising-Blu-Ray-DVD-with-FREE-M-16-Climbing-Brush/583951499", "name": "Reel Rock 9 Valley Uprising Blu-Ray DVD with FREE M-16 Climbing Brush", "category": "UNNAV", "relevance": "(1432, 0.9971633)"}, {"url": "https://www.walmart.com/ip/Objets-d-art-et-de-bel-ameublement-9781010441861/164640680", "name": "Objets d'art et de bel ameublement", "category": "UNNAV", "relevance": "(758, 0.99701613)"}, {"url": "https://www.walmart.com/ip/Sermons-Du-R-P-Re-Cheminais-de-La-Compagnie-de-J-Sus-Volume-1-9781276804974/266189598", "name": "Sermons Du R. P Re Cheminais, de La Compagnie de J Sus, Volume 1...", "category": "UNNAV", "relevance": "(2367, 0.9969318)"}, {"url": "https://www.walmart.com/ip/Hal-Leonard-Silent-Winter-SSAA-composed-by-J-Paul-Williams/364075012", "name": "Hal Leonard Silent Winter SSAA composed by J. Paul Williams", "category": "Home Page/Musical Instruments/Musical Instruction/Musical Instruction", "relevance": "(2079, 0.9966786)"}, {"url": "https://www.walmart.com/ip/Troubled-Waters-9781286379127/423310946", "name": "Troubled Waters ...", "category": "UNNAV", "relevance": "(788, 0.9965716)"}, {"url": "https://www.walmart.com/ip/Your-Next-Stamp-Die-mini-Pillow-Box/49334332", "name": "Your Next Stamp Die-mini Pillow Box", "category": "Home Page/Arts Crafts & Sewing/Scrapbooking/Stamping", "relevance": "(2881, 0.99654126)"}, {"url": "https://www.walmart.com/ip/2008-Dodge-Viper-SRT10-Red-1-24-Diecast-Car-Model-by-Jada/103902425", "name": "2008 Dodge Viper SRT10 Red 1/24 Diecast Car Model by Jada", "category": "Home Page/Toys/Hobby & Collectible Toys/Model Kits", "relevance": "(2776, 0.99612164)"}, {"url": "https://www.walmart.com/ip/New-19-Space-Rack-Case-Double-Door-10U-DJ-Equipment-Cabinet-for-Audio-Equipment/766385991", "name": "New 19\" Space Rack Case Double Door 10U DJ Equipment Cabinet for Audio Equipment", "category": "UNNAV", "relevance": "(2870, 0.9960227)"}, {"url": "https://www.walmart.com/ip/Schriften-Der-Naturforschenden-Gesellschaft-in-Danzig-9783743462656/955011552", "name": "Schriften Der Naturforschenden Gesellschaft in Danzig", "category": "Home Page/Books/Science & Nature Books/Science Books/General Science Books", "relevance": "(2267, 0.9960198)"}, {"url": "https://www.walmart.com/ip/Um-Aus-Shakespeares-Hamlet-Zu-Zitieren-NEIN-DIN-A5-Dotted-Punkteraster-Heft-f-r-Shakespeare-Fans-Notizbuch-Tagebuch-Planer-Literatur-Witz-Not-9781080923557/635005203", "name": "Um Aus Shakespeares \"Hamlet\" Zu Zitieren: \"NEIN\" DIN A5 Dotted Punkteraster Heft f?r Shakespeare Fans - Notizbuch Tagebuch Planer Literatur Witz - Not", "category": "UNNAV", "relevance": "(1144, 0.99600047)"}, {"url": "https://www.walmart.com/ip/Waves-Parts-Compatible-Vizio-M50-D1-LED-Driver-LNTVFV26WXAD4/810949821", "name": "Waves Parts Compatible Vizio M50-D1 LED Driver LNTVFV26WXAD4", "category": "UNNAV", "relevance": "(2422, 0.99599385)"}, {"url": "https://www.walmart.com/ip/Thoughts-of-Cicero-on-the-Following-Subjects-Viz-I-Religion-XII-Miscellaneous-Thoughts-Published-in-Latin-and-French-by-the-Abb-D-Olivet-9781140842996/606064807", "name": "Thoughts of Cicero, on the Following Subjects, Viz. I. Religion. ... XII. Miscellaneous Thoughts. Published in Latin and French by the Abb D'Olivet", "category": "UNNAV", "relevance": "(1079, 0.9959714)"}, {"url": "https://www.walmart.com/ip/Pigerne-fra-Nordkorea-eBook-9788763831086/899763262", "name": "Pigerne fra Nordkorea - eBook", "category": "UNNAV", "relevance": "(2820, 0.99594057)"}, {"url": "https://www.walmart.com/ip/Encienda-La-Chispa-Un-Plan-Que-Potenciara-Su-Metabolismo-Para-Quemar-Grasa-Las-24-Horas-del-Dia-9781594864957/283913227", "name": "Encienda La Chispa : Un Plan Que Potenciara Su Metabolismo Para Quemar Grasa Las 24 Horas del Dia", "category": "UNNAV", "relevance": "(1042, 0.9958315)"}, {"url": "https://www.walmart.com/ip/Endangered-and-Threatened-Wildlife-and-Plants-Impact-Analyses-of-Critical-Habitat-Us-Fish-and-Wildlife-Service-Regulation-Fws-2018-Edition-9781729584613/542440783", "name": "Endangered and Threatened Wildlife and Plants - Impact Analyses of Critical Habitat (Us Fish and Wildlife Service Regulation) (Fws) (2018 Edition)", "category": "UNNAV", "relevance": "(2957, 0.9956782)"}, {"url": "https://www.walmart.com/ip/Barton-Creek-Aurora-Retired-By-GUND/273770558", "name": "Barton Creek Aurora, Retired By GUND", "category": "Home Page/Toys/Stuffed Animals & Plush Toys/GUND Stuffed Animals", "relevance": "(2575, 0.99551433)"}, {"url": "https://www.walmart.com/ip/Express-Yourself-MIP-3D-Stickers-Giraffe-Elephant-Monkey/168973817", "name": "Express Yourself MIP 3D Stickers-Giraffe, Elephant & Monkey", "category": "Home Page/Arts Crafts & Sewing/Scrapbooking/Stickers", "relevance": "(1979, 0.9953951)"}, {"url": "https://www.walmart.com/ip/VIDBOX-USB-Game-Capture-Device/636416836", "name": "VIDBOX - USB Game Capture Device", "category": "Home Page/Electronics/Computers/Software", "relevance": "(2981, 0.9951074)"}, {"url": "https://www.walmart.com/ip/United-States-History-and-Geography-Modern-Times-c-2018-9780076768646-0076768643-9780076768646/570181197", "name": "United States; History and Geography, Modern Times, c 2018, 9780076768646, 0076768643", "category": "UNNAV", "relevance": "(1851, 0.99499065)"}, {"url": "https://www.walmart.com/ip/Case-of-12/952152813", "name": "Case of 12", "category": "Home Page/Cell Phones/Cell Phone Accessories/Phone Cases/Shop Cases by Phone Model/LG Stylo Cases/LG Stylo 4 Cases", "relevance": "(1570, 0.9949648)"}, {"url": "https://www.walmart.com/ip/Notizbuch-f-r-Informatiker-Informatikerin-Originelle-Geschenk-Idee-120-Seiten-liniertes-blanko-Papier-9781671626331/340932846", "name": "Notizbuch f?r Informatiker / Informatikerin: Originelle Geschenk-Idee [120 Seiten liniertes blanko Papier ]", "category": "UNNAV", "relevance": "(1724, 0.9948747)"}, {"url": "https://www.walmart.com/ip/The-Life-and-Work-of-Sir-William-Van-Horne-9780343756406/430291539", "name": "The Life and Work of Sir William Van Horne", "category": "Home Page/Books/Biographies & Memoirs/General Biographies & Memoirs", "relevance": "(350, 0.9947344)"}, {"url": "https://www.walmart.com/ip/Redneck-Fisgerman-9780368569685/911434990", "name": "Redneck Fisgerman", "category": "Home Page/Books/Literature & Fiction Books/Fiction Novels/Action & Adventure Novels", "relevance": "(1749, 0.99418217)"}, {"url": "https://www.walmart.com/ip/Practical-Observations-on-Church-Reform-the-Tithe-Question-and-National-Education-in-Ireland-1838-9781104427078/976256631", "name": "Practical Observations on Church Reform, the Tithe Question, and National Education in Ireland (1838)", "category": "Home Page/Books/Literature & Fiction Books/Literary Collection Books/Literary Collections - General", "relevance": "(362, 0.9941674)"}, {"url": "https://www.walmart.com/ip/Ethologia-de-Blanes-1886-9781168405180/253409030", "name": "Ethologia de Blanes (1886)", "category": "Home Page/Books/Literature & Fiction Books/Literary Collection Books/Literary Collections - General", "relevance": "(976, 0.9941523)"}, {"url": "https://www.walmart.com/ip/LED-copper-wire-ribbon-ribbon-string/120240706", "name": "LED copper wire ribbon ribbon string", "category": "Home Page/Party & Occasions/Wedding Shop/Wedding Party Supplies/Wedding Gift Wrap & Greeting Cards/Wedding Gift Wrap", "relevance": "(18541, 0.9938688)"}, {"url": "https://www.walmart.com/ip/Lontano-dal-mio-Paese-eBook-9788871632490/679046102", "name": "Lontano dal mio Paese - eBook", "category": "Home Page/Books/Literature & Fiction Books/Fiction Novels/General Fiction Books", "relevance": "(352, 0.99355054)"}, {"url": "https://www.walmart.com/ip/Memorias-Vol-2-High-Atlas-To-The-Sahara-Desert-Vinyl/905613554", "name": "Memorias Vol. 2: High Atlas To The Sahara Desert (Vinyl)", "category": "Home Page/Music/Vinyl Records/General Vinyl Records", "relevance": "(2407, 0.9934948)"}, {"url": "https://www.walmart.com/ip/Arrows-in-the-Air-1878-9781120158468/852249658", "name": "Arrows in the Air (1878)", "category": "Home Page/Books/Literature & Fiction Books/Literary Collection Books/Literary Collections - General", "relevance": "(22792, 0.99256766)"}, {"url": "https://www.walmart.com/ip/An-Africana-Philosophy-of-Temporality-Paperback-9783030075095/831562554", "name": "An Africana Philosophy of Temporality : Homo Liminalis (Paperback)", "category": "Home Page/Books/Political Books/Political History & Theory Books", "relevance": "(1528, 0.99251395)"}, {"url": "https://www.walmart.com/ip/Scooby-Doo-Green-Background-Cover-Coloring-Activity-Book/704479975", "name": "Scooby-Doo! Green Background Cover Coloring & Activity Book", "category": "Home Page/Shop by Movie/Scoob/Scoob Characters/Scooby", "relevance": "(2258, 0.99231607)"}, {"url": "https://www.walmart.com/ip/O-Lugar-dos-Gritos-eBook-9789892035420/262035312", "name": "O Lugar dos Gritos - eBook", "category": "Home Page/Books/Children's & Kids' Books/Action & Adventure Kids' Books", "relevance": "(1970, 0.9922585)"}, {"url": "https://www.walmart.com/ip/Light-Second-Edition-9783337267773/231189932", "name": "Light : Second Edition", "category": "Home Page/Books/Science & Nature Books/Science Books/General Science Books", "relevance": "(2997, 0.992214)"}, {"url": "https://www.walmart.com/ip/Mobile-Phone-Based-Sensing-Software-A-Complete-Guide-9781719052139/299493618", "name": "Mobile Phone Based Sensing Software : A Complete Guide", "category": "Home Page/Books/Business & Money Books/General Business & Money Books", "relevance": "(2946, 0.9915596)"}];



interface search_entry {
    name: string,
    category: string,
    url: string,
    relevance: string,
}

// const mock_entries: search_entry[] = [
//     {
//         name: "Baby yoda",
//         category: "Mandalorian",
//         url: "https://www.walmart.com/ip/Operation-Game-Star-Wars-The-Mandalorian-Edition-Game/263539418",
//         relevance: 0.7,
//     },
//     {
//         name: "Operation Game: Star Wars The Mandalorian Edition Game",
//         category: "Mandalorian",
//         url: "https://www.walmart.com/ip/Operation-Game-Star-Wars-The-Mandalorian-Edition-Game/263539418",
//         relevance: 0.7,
//     },
//     {
//         name: "Baby yoda",
//         category: "Mandalorian",
//         url: "https://www.walmart.com/ip/Operation-Game-Star-Wars-The-Mandalorian-Edition-Game/263539418",
//         relevance: 0.7,
//     },
//     {
//         name: "Baby yoda",
//         category: "Mandalorian",
//         url: "https://www.walmart.com/ip/Operation-Game-Star-Wars-The-Mandalorian-Edition-Game/263539418",
//         relevance: 0.7,
//     },
//     {
//         name: "Baby yoda",
//         category: "Mandalorian",
//         url: "https://www.walmart.com/ip/Operation-Game-Star-Wars-The-Mandalorian-Edition-Game/263539418",
//         relevance: 0.7,
//     },
//     {
//         name: "Operation Game: Star Wars The Mandalorian Edition Game",
//         category: "Mandalorian",
//         url: "https://www.walmart.com/ip/Operation-Game-Star-Wars-The-Mandalorian-Edition-Game/263539418",
//         relevance: 0.7,
//     },
//     {
//         name: "Baby yoda",
//         category: "Mandalorian",
//         url: "https://www.walmart.com/ip/Operation-Game-Star-Wars-The-Mandalorian-Edition-Game/263539418",
//         relevance: 0.7,
//     },
//     {
//         name: "Baby yoda",
//         category: "Mandalorian",
//         url: "https://www.walmart.com/ip/Operation-Game-Star-Wars-The-Mandalorian-Edition-Game/263539418",
//         relevance: 0.7,
//     },
// ];

const Launch = () => {

    const [search, changeSearch] = React.useState<string>('');

    const [searchEntries, changeEntries] = React.useState<search_entry[]>([]);

    return (
        <>
            <Navbar className='d-flex align-items-center bg-white p-0 fixed-top shadow-sm pt-1'>
                <div className={styles.title}>
                    waloogle
                </div>
                <div className={styles.searchContainer}>
                    <Form onSubmit={e => {
                        e.preventDefault();
                        changeSearch('');
                        changeEntries(json_data);
                    }}>
                        <Form.Group controlId='search'>
                            <InputGroup>
                                <InputGroup.Prepend>
                                    <InputGroup.Text>
                                        <div onClick={() => console.log("yote")}>
                                            <FontAwesomeIcon icon={faSearch}/>
                                        </div>
                                    </InputGroup.Text>
                                </InputGroup.Prepend>
                                <Form.Control type="text"
                                              placeholder="Search here.."
                                              value={search}
                                              onChange={e => changeSearch(e.target.value)}/>
                            </InputGroup>
                        </Form.Group>
                    </Form>
                </div>
            </Navbar>
            <div className={styles.block}/>
            <Container>
                {searchEntries.map(entry => {
                    return (<SearchEntry name={entry.name}
                                         relevance={entry.relevance}
                                         category={entry.category}
                                         url={entry.url}/>)
                })}
            </Container>
        </>
    );
};

export default Launch;