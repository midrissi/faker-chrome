define(['faker'] , function(faker){
	faker.definitions.male_name		= ["Abel","Acharon","Achisar","Adam","Adin","Adir","Adon","Aharon","Akiva","Alitz","Amasa","Amir","Amnon","Amon","Ari","Ariel","Asa","Asaph","Asher","Asriel","Atzel","Aviur","Aviv","Avram","Ben","Chadlai","Chai","Chalfon","Chasid","Chasiel","Chaviv","Chozai","Cyrus","Dalfon","Dan","Eden","Eifah","Eilam","Eli","Enosh","Eran","Ethan","Ezra","Geshem","Gidon","Gilon","Haskel","Hassan","Hosheia","Ikabod","Ira","Jared","Kahana","Kaleb","Kalil","Kayam","Kenan","Laban","Malach","Maluch","Matok","Mattan","Meir","Midian","Moran","Nathan","Nechum","Nisan","Omar","Orev","Pedat","Raamah","Raanan","Racham","Ranen","Resheph","Sami","Samson","Saraph","Seth","Shachar","Shachor","Shai","Shani","Solomon","Tavas","Tavor","Tzach","Tzalmon","Yakar","Zamir","Zerem","Zevach","Zimran","Adal","Adalrich","Alexis","Anicho","Archibald","Arend","Armin","Arnd","August","Austin","Baldwin","Benedikite","Berend","Bern","Brendan","Christoph","Dennis","Derek","Edwin","Eginhard","Egon","Erik","Felix","Friederich","Garrick","Gerald","Gregor","Gustaf","Guy","Hagan","Harald","Heribert","Hermann","Hubert","Humfried","Justus","Karl","Kasper","Klemens","Konrad","Konstantin","Leo","Leonhard","Leopold","Lothar","Ludwig","Lukas","Magnus","Marius","Maximilian","Oliver","Oskar","Oswald","Otto","Rainer","Ralph","Randolf","Richard","Sigurd","Theo","Ulf","Veit","Vincens","Vital","Vitus","Wilfred","Wolf","Wolfgang","Ace","Acheron","Achilles","Aeneas","Aeolus","Aeschylus","Asclepius","Aeson","Agenor","Alair","Aleron","Alerio","Alroy","Amadeo","Amadio","Amphitryo","Amphitryon","Anguis","Anteros","Apelles","Apollo","Aquilino","Arcas","Arden","Ardin","Ardmore","Ares","Argus","Aries","Aristoteles","Atlas","Attis","Agustus","Agustine","Agust","Agustin","Agoston","Aurelian","Aurelien","Auerlio","Avaro","Aubin","Aubyn","Alvar","Alver","Avernus","Axenus","Bacchus","Balbo","Balbas","Balendin","Balen","Balint","Baline","Binger","Bittor","Blandon","Bland","Bonaventure","Brencis","Brutus","Bucer","Cacus","Cadmus","Caesar","Cezar","Cajetan","Calchas","Calix","Callixtus","Calleo","Callosus","Camillus","Camilo","Cantor","Carcer","Carmine","Carsten","Cristiano","Christian","Cassius","Cass","Cash","Cato","Catus","Caton","Cecil","Cecilio","Caecelius","Celeres","Celestin","Celistine","Cerberus","Chryses","Clarence","Clement","Clemente","Colon","Constantine","Constant","Corbin","Cowin","Corvin","Crispin","Curt","Damaon","Dezso","Dis","Dontato","Donatello","Dorjan","Drake","Draco","Draconis","Duke","Durant","Duran","Durand","Eligius","Elvio","Emil","Eos","Errol","Fabrice","Faunus","Fausto","Faust","Felix","Felice","Felicio","Ferenc","Fidelio","Fidel","Florian","Floren","Forrest","Foster","Gabriel","Garai","Giles","Giuliano","Grant","Gratian","Gustave","Gusztav","Gwidon","Gyala","Harpocrates","Hieronymous","Hillary","Honorato","Horace","Ignatius","Ilari","Ilarion","Ilarius","Ince","Inek","Janus","Javan","Justin","Killian","Kilian","Lapis","Lares","Laurence","Lawrence","Lorin","Leo","Leroy","Liber","Lucian","Lucien","Lysander","Magnus","Maximos","Maximus","Malcator","Maldrake","Mallory","Maluspuer","Maren","Maurice","Michael","Modeste","Moneta","Mortimer","Necator","Nemesus","Neon","Neptune","Nereus","Nigel","Nikk","Nobilus","Noctivagus","Noxangelus","Oistin","Oliver","Ollie","Olvan","Orcus","Paris","Pax","Peli","Pephredo","Percival","Parzifal","Phoebus","Pius","Pio","Pious","Placyd","Placid","Placidio","Pontifex","Porter","Prentice","Prince","Prospero","Ray","Renato","Renzo","Rex","Roland","Rule","Salvador","Salvator","Sanguinarius","Sebastian","Seraphim","Serenus","Sibley","Sinclair","Siseal","Sol","Somnus","Stacey","Terrence","Thrasius","Titus","Trent","Tristan","Triton","Tulio","Uiseann","Valens","Valentine","Valerian","Valerius","Valera","Valerik","Venedictos","Vergil","Virgil","Vertumnus","Viktor","Vidor","Vincent","Vincien","Vivien","Vulcan","Walerian","Waring","Wincen","Wicus","Yuli","Zorian","Agathias","Aineias","Aiolos","Alexios","Altair","Ambrosios","Anakletos","Anastasios","Anatolios","Andreas","Aniketos","Antaios","Aristides","Aristokles","Arsenios","Athanasios","Augustine","Baruch","Basil","Christos","Damianos","Demetri","Dion","Eleutherios","Elpidios","Erasmios","Eryx","Flavian","Gregor","Hali","Heraklees","Hesperos","Ignatios","Isidoros","Jason","Kosmas","Kyrillos","Leiandros","Lucian","Lysandros","Makar","Marinos","Mikhail","Milos","Nikodemos","Nikomedes","Nikostratos","Parthenios","Pelagios","Pericles","Seth","Silas","Silvanos","Soterios","Spiridon","Telesphoros","Vernados","Zenobios","Adalard","Aimé","Aimery","Albert","Alexandre","Alfred","Ambroise","Anatole","Anselme","Aristide","Armand","Aurèle","Aurèlien","Baldwin","Barnabé","Bellamy","Benjamin","Bertram","Cecil","Clément","Colombain","Constant","Constantine","Corin","Cyrille","Damien","Didier","Edmond","Elio","Eric","Esmé","Esmond","Évariste","Fabrice","Firmin","Florian","Francis","Gaspard","Gaston","Gerald","Herbert","Hervé","Hilaire","Hubert","Hugh","Ignace","Isidore","Juste","Justin","Lambert","Lance","Léandre","Léo","Léon","Leopold","Louis","Lucien","Macaire","Marius","Maxime","Noë","Nicolas","Pascal","Pierre","Rainier","Raoul","Rapheal","Raymond","Régis","Renaud","René","Richard","Roch","Sacha","Séverin","Spiro","Tristan","Valère","Victor","Vincent","Vivien","Aadi","Aakesh","Aakil","Aalok","Aatmadeva","Aatmik","Abdul","AbdulHakim","AbdulJabbar","AbdulLatif","AbdulRahman","Abhiraja","Adamya","Adheesha","Adhideva","Aditya","Aharnish","Ailesh","Akalanka","Akhilendra","Akilesh","Akshan","Akshay","Amalesh","Amil","Amul","Anadi","Anand","Ananta","Ananya","Anil","Anjay","Arjun","Arshad","Arvind","Aseem","Atyaananda","Avanindra","Avikar","Babar","Badar","Bala","Baldev","Basant","Bhakati","Bhanu","Bhasvan","Bhavnish","Bishvajit","Chaitanya","Chand","Chandak","Chandra","Chandrak","Chandran","Chandraraj","Charaka","Charudatta","Charvaka","Chintak","Daivat","Daivik","Danveer","Dayanand","Devak","Deval","Devanand","Devdan","Devdas","Devmani","Devraj","Dhaval","Dhavlen","Dhavlesh","Dhimani","Dinendra","Dinesh","Ehan","Ekaanta","Evan","Fahim","Falak","Firoz","Gaurav","Gulshan","Gurudatta","Gyan","Gyandev","Hafeez","Haidar","Hans","Harish","Harjeet","Harun","Hasan","Hemachandra","Himesh","Isha","Ishaan","Jabbar","Jahan","Jaidev","Jaimini","Jaladhi","Jalal","Jivan","Johar","Kadir","Kalidasa","Kamal","Kamil","Kanu","Karim","Kavi","Kavindra","Khalid","Khalil","Krishna","Lalitchandra","Latif","Lavanaa","Lochan","Mahin","Majid","Malik","Mansoor","Mohajit","Nadim","Nalin","Nandan","Naresh","Neelandra","Neelmani","Niaz","Prasad","Pravin","Prem","Rafiq","Rahim","Rajnish","Ram","Rama","Ranjit","Ratan","Ravi","Raza","Roshan","Sabir","Sahaj","Saiyid","Sajan","Sajjan","Sami","Shafiq","Shahzad","Shakil","Shyam","Sohan","Sohil","Sudas","Sudhir","Sundara","Tahir","Tarak","Tipu","Umar","Umed","Urvil","Vandan","Varen","Varesh","Varil","Varun","Vasant","Vatsyanana","Vimal","Vivek","Yamin","Yash","Yuri","Zafar","Ziya","Akemi","Akihiko","Akio","Akira","Chokichi","Hideaki","Hideo","Hiromasa","Hiroshi","Hisoka","Hitoshi","Hosyu","Huyu","Isas","Isi","Jun","Kamenosuke","Kane","Kanji","Katsutoshi","Ken","Kin","Kiyoshi","Koji","Kumakichi","Makoto","Masahiro","Masao","Masato","Nagataka","Naoko","Ozuru","Sen","Takeshi","Tobikuma","Tokutaro","Tomi","Torao","Toshihiro","Yasuo","Yemon","Yukio","Afanasi","Agafon","Aleksandr","Aleksei","Ambrossij","Anatoli","Andrei","Anikita","Anisim","Anton","Arkhip","Arseni","Artemi","Avel","Avgustin","Boris","Borislav","Damian","Dan","Efim","Egor","Evgeni","Gennadi","German","Grigori","Iakov","Ignati","Igor","Illarion","Innokenti","Isidor","Karl","Kassian","Kirill","Kliment","Kondrati","Konstantin","Kosma","Leongard","Makari","Maksim","Maksimilian","Martin","Mikhail","Mstislav","Nikita","Nikodim","Nikolai","Noe","Oleg","Pavel","Pij","Prokhop","Prokhor","Sacharija","Sasha","Savel","Serafim","Spiridon","Stefan","Valentin","Valeri","Vasili","Vikenti","Viktor","Vitali","Vlad","Vladimir","Vladislav","Abbondio","Aeneas","Alberto","Aldo","Alessandro","Alessio","Amato","Ambrogio","Amedeo","Anacleto","Anatasgio","Anatolio","Andrea","Angelo","Anselmo","Antioco","Antonio","Armino","Augustine","Augusto","Aurelio","Baldassare","Basilio","Benedetto","Benedict","Benigno","Benvenuto","Bernardo","Biagio","Bonaventura","Bonifacio","Camillo","Carmine","Cecilio","Celso","Ciriaco","Ciro","Clemente","Columbano","Corrado","Cosmo","Dante","Dominico","Edmondo","Eidio","Elpidio","Ermanno","Eugenio","Ezio","Fausto","Fedele","Filiberto","Flavio","Gaspare","Gerardo","Gino","Giovanni","Giraldo","Giustino","Graziano","Guglielmo","Gustavo","Ignazio","Ilario","Innocenzio","Leo","Leon","Leonardo","Luciano","Luigi","Manfredo","Marino","Massimo","Niccolo","Nicodemo","Nicomedo","Nicostrato","Nunzio","Pio","Placido","Propero","Raimondo","Raniero","Renato","Rinaldo","Serafino","Sergio","Sigimondo","Silvano","Stefano","Tancredo","Tito","Uberto","Ulisse","Valentino","Valerio","Vencenzo","Vito","Vittorio","Abbán","Abrachan","Achaius","Adamnan","Aedus","Aeneas","Aenges","Águistín","Aidan","Ailbhe","Ailill","Ailín","Ainmire","Alaios","Albany","Alistair","Anlon","Anluan","Aodh","Aralt","Ardal","Art","Arthur","Banbhan","Baothghalach","Barclay","Beacán","Beag","Beanón","Bearach","Becan","Benedict","Beolagh","Bercan","Bran","Brandan","Brandubh","Branduff","Brasil","Breasal","Breandán","Brendan","Brian","Brón","Brone","Buadhach","Buagh","Cadhla","Caffar","Cahal","Cahir","Cathaoir","Calis","Callaghan","Canice","Caoimhín","Caolán","Carlin","Cárthach","Carthage","Cathal","Cathaoir","Ceallach","Ceallachán","Cearbhall","Cecil","Christian","Cian","Cianán","Ciardha","Ciarrai","Cillian","Coileán","Coinneach","Colm","Colmán","Columba","Comhghan","Conall","Conán","Conley","Connlaodh","Conn","Conway","Corey","Curran","Cyril","Dahy","Dáithí","Dáibhidh","Dáivi","David","Daman","Darby","Dermot","Diarmaid","Denis","Derek","Derry","Devin","Doiminic","Dominic","Donal","Donald","Donnchadh","Douglas","Duff","Ea","Eachann","Earnán","Éimhín","Éinrí","Emmet","Eochaidh","Eoghan","Eóin","Ernest","Eugene","Euston","Evan","Faolán","Feagh","Fearghall","Fehin","Feichín","Felan","Felim","Felimy","Ferris","Fiach","Fiachra","Finan","Forbes","Gabriel","Gaibrial","Galen","Garrett","Garvan","Gearalt","Geoffrey","George","Gilbert","Gilchrist","Gildea","Gill","Gilmore","GiollaChríost","Glenn","Godfrey","Gréagóir","Guy","Harold","Hewney","Hugh","Ian","Jason","Kealan","Keir","Keiran","Kellagh","Kevin","Lachtna","Lasairian","Laurence","Leo","Leon","Liam","Lucan","Lucas","Lucius","Maghnus","Magnus","Mahon","Mainchin","Mannix","Máirtín","Maolmórdha","Meallán","Mellan","Morgan","Murchadh","Murrough","Muireadhach","Nevan","Niadh","Niall","Odhrán","Oghe","Oran","Oscar","Ossian","Owen","Patrick","Paul","Peadar","Rádhulbh","Raghnall","Réamonn","Richard","Robert","Robin","Rónán","Rory","Saebhreathach","Shane","Siadhall","Sorley","Tadhg","Teige","Thom","Thomas","Tiarnach","Tierney","Tiernan","Uinseann","Vincent","Walter","William"];
	faker.definitions.female_name	= ["Adara","Adena","Adi","Adira","Ahavah","Alitzah","Aliyah","Amma","Arela","Astera","Betulah","Chashmona","Chazona","Chulda","Delilah","Devasha","Efah","Galiah","Gerushah","Gevirah","Gina","Jemima","Karmil","Kelila","Kessem","Kitra","Leah","Leilah","Lilth","Naamah","Neviah","Sarai","Shira","Tzila","Tzili","Zarah","Zemira","Zemorah","Zerlinda","Zila","Agathe","Agna","Alberta","Alfreda","Amalia","Anastasia","Angelika","Anselma","Asta","Astrid","Aveza","Bathilda","Birgit","Burnhilde","Carla","Carmen","Chloris","Constanze","Cordula","Corona","Dagmar","Debra","Diederike","Domino","Ebba","Effemy","Elisa","Erika","Ernesta","Ethel","Eugenie","Felicie","Flora","Geraldine","Gerda","Gerta","Gisella","Gustava","Hallie","Harriet","Helga","Hilda","Huette","Idona","Ingrid","Isolde","Jennifer","Korinna","Laura","Leonarda","Lilian","Lorelei","Lurette","Martina","Mina","Nitsa","Nixie","Serilda","Siegfrida","Sigrid","Swanhilda","Tresa","Ulrike","Ursula","Veleda","Verena","Alecto","Alida","Audentia","Cecilia","Dissonantia","Eryn","Estelle","Furia","Jinkx","Lachesis","Lamia","Lena","Levana","Luna","Lunangela","Lunangelia","Luscinia","Necromantia","Nerissa","Noxaura","Nymphamarina","Parodia","Perdita","Pricilla","Scylla","Sheila","Silva","Solita","Stiria","Tempesta","Tisiphone","Trista","Umbra","Viverra","Veronica","Vesta","Asta","Atropos","Clotho","Cynthia","Desdemona","Echo","Elissa","Galatea","Ivy","Letha","Lotus","Megaera","Melantha","Melia","Melina","Melinda","Nerine","Nerissa","Nona","Nyx","Parca","Pearl","Rhea","Selena","Vanessa","Venilia","Zora","Adélaïde","Adrienne","Adora","Aida","Alette","Alexandra","Amarante","Aurore","Belle","Blanche","Camille","Céleste","Cendrine","Charlotte","Denise","Désirée","Edith","Esmée","Evangeline","Faye","Gemma","Hélène","Honoria","Irènèe","Isabelle","Jacqueline","Justine","Kalliroe","Leala","Léonie","Liliane","Marguerite","Marthe","Mirabelle","Muriel","Myra","Nadia","Odette","Ophelie","Rébecca","Renée","Rochelle","Séraphine","Shantay","Sybille","Valérie","Yvette","Zuria","Achala","Adhika","Adhita","Aisha","Ajalaa","Ajeya","Akhila","Amala","Amarjaa","Amee","Amisha","Amita","Anala","Anganaa","Anima","Anita","Anuka","Anupa","Apsara","Arvindaa","Asha","Ashni","Aziza","Azra","Bahaar","Bakul","Bano","Beeja","Bibi","Chahna","Chaitali","Chameli","Chandaa","Chandrakanta","Chandrima","Charita","Charumati","Damayanti","Dayaa","Devaki","Deval","Devi","Devika","Dhavala","Divya","Dularee","Durga","Ela","Eshana","Evina","Gita","Gitanjali","Gyanda","Habiba","Haima","Halima","Hamida","Hanita","Hansa","Harsha","Hasika","Hasina","Himani","Ilesha","Indira","Indranee","Indu","Isha","Ishana","Jaamini","Jalajaa","Jalini","Jamila","Janikaa","Jany","Jaya","Jena","Jinnat","Jivanta","Kaamilee","Kaanan","Kaasu","Kailash","Kala","Kali","Kalita","Kalpana","Kamala","Kamila","Kanta","Kanti","Kanya","Karma","Karuna","Kasturba","Kerani","Kimaya","Kiri","Komal","Kusuma","Lajni","Laksha","Lalita","Lata","Madhavi","Mahima","Manjika","Maya","Meena","Mehal","Mohana","Mona","Monika","Nadira","Nalini","Naresha","Nasrin","Nayana","Neeraja","Neha","Nimesha","Niranjana","Nisha","Noor","Ojasvee","Padmasundara","Padmavati","Panna","Parvani","Radha","Rajani","Rajnandini","Ramaa","Rana","Rani","Ranjana","Rashida","Rati","Ravija","Riju","Rita","Roschan","Saba","Sachi","Safia","Salila","Sandyha","Sanjana","Saroja","Satyarupa","Savita","Sesha","Shahina","Shanta","Sharada","Shashibala","Sheela","Shikha","Shirin","Shona","Shyama","Tamanna","Tamas","Tara","Tarika","Toshala","Varsha","Veera","Ai","Aiko","Akina","Ayame","Ayameko","Etsu","Etsuko","Gin","Hamako","Hana","Hanako","Haruko","Hisa","Hoshi","Hoshiko","Ishi","Jin","Kagami","Kai","Katsu","Kazuko","Kei","Kimi","Kinu","Kinoko","Kishiko","Kohana","Koneko","Kotori","Mai","Michiko","Mika","Miko","Mitsu","Miyo","Miyuki","Mizuko","Nariko","Nezumi","Ran","Rei","Ren","Sachi","Sachiko","Sakura","Shina","Tamako","Tami","Tamiko","Tanaka","Tori","Tukiko","Umiko","Uta","Yoshe","Yoshi","Yuki","Yukiko","Yuri","Agnessa","Albina","Alina","Amaliya","Anastasiya","Angelina","Anna","Diana","Dora","Duscha","Ekaterina","Elvira","Evelina","Filikitata","Kisa","Klementina","Larisa","Liliya","Luiza","Marina","Mariya","Marta","Matriona","Melaniya","Nika","Sasha","Shanna","Sofiya","Sonya","Stesha","Svetlana","Tania","Tanya","Vera","Veronica","Veronika","Violetta","Vita","Addolorata","Althaea","Amara","Aurelia","Aurora","Benedetta","Bionda","Bona","Brigida","Calida","Calligena","Callisto","Camilla","Cara","Catarina","Celina","Chiara","Clytie","Constantina","Cosima","Drusilla","Edvige","Elena","Elettra","Eliana","Evangelina","Fiammetta","Fidelia","Filomena","Fiorella","Florentina","Fortuna","Ginevra","Gioconda","Lucia","Regina","Rosabella","Ruth","Serena","Sirena","Tessa","Valentina","Viviana","Abbey","Abaigeal","Affrica","Aghna","Agnes","Aideen","Ailbhe","Ailís","Aimilíona","Amelia","Amelina","Aingeal","Angela","Aisling","Aislinn","Ashling","Alastrina","Alice","Alma","Amanda","Anita","Anna","Anne","Annette","Annie","Aoibh","Augusteen","Aveline","Avril","Barbara","Barran","Beatha","Bébhinn","Bevin","Berneen","Beth","Bidelia","Bidina","Blath","Brenda","Caitríona","Caoilfhionn","Catherine","Cathleen","Coelfinnia","Cecila","Chevonne","Ciannait","Ciara","Clare","Colette","Cordelia","Damhnait","Devnet","Dymphna","Downett","Dawn","Deborah","Deirdre","Dervila","Dervla","Doireann","Dorinnia","Dorren","Donelle","Donla","Doreen","Éabha","Éadaoin","Étáin","Ealga","Eavan","Edana","Eileanór","Elaine","Elan","Eleanor","Eileen","Eimhear","Emer","Eimile","Eireen","Elisa","Eliza","Elizabeth","Eva","Eve","Eveleen","Faoiltiarna","Fina","Fíona","Flora","Gemma","Gloria","Grace","Grania","Helen","Ina","Irene","Isabel","Iseult","Joan","Joanna","Julia","Julie","Juliet","Karen","Kate","Kathy","Katie","Kay","Keelin","Kerry","Laura","Lelia","Lile","Lily","Letitia","Lucy","Máda","Maggie","Margaret","Maille","Máire","Máiriá","Maria","Maureen","Mandy","Márta","Martina","Maude","Maura","Michelle","Moina","Monat","Muadhnait","Móirín","Mór","Moreen","Morrin","Mugain","Muirgheal","Muriel","Myrna","Nessa","Niamh","Nicola","Noirin","Nora","Noreen","Norlene","Odharnait","Ornat","Ohnicio","Orla","Orlaith","Pádraigín","Patricia","Peg","Peggy","Rathnait","Regina","Riona","Renny","Róis","Róisín","Rosaleen","Rose","Ruth","Sabia","Sabina","Sadhbh","Saidhbhín","Sive","Sally","Sarah","Sandra","Saraid","Sheila","Sisile","Siany","Slania","Slanie","Sophia","Sorcha","Susan","Susanna","Teresa","Tigris","Treise","Unity","Valerie","Vevila","Vevina","Vivian","Vivienne","Yvonna","Zaira"];
	faker.definitions.first_name	= faker.definitions.male_name.concat(faker.definitions.female_name);
	faker.definitions.male_prefix	= ["Mr.", "Dr."];
	faker.definitions.female_prefix	= ["Mrs.", "Ms.", "Miss"];
	faker.definitions.companies		= ["Exxon Mobil", "JPMorgan Chase", "General Electric", "Royal Dutch Shell", "ICBC", "HSBC Holdings", "PetroChina", "Berkshire Hathaway", "Wells Fargo", "Petrobras-Petróleo Brasil", "BP", "Chevron", "China Construction Bank", "Citigroup", "Gazprom", "Wal-Mart Stores", "Volkswagen Group", "Total", "Agricultural Bank of China", "BNP Paribas", "Bank of China", "Apple", "Banco Santander", "Sinopec-China Petroleum", "Toyota Motor", "Samsung Electronics", "ConocoPhillips", "Vodafone", "ENI", "Itaú Unibanco Holding", "China Mobile", "IBM", "AT&amp;T", "Pfizer", "Procter &amp; Gamble", "Mitsubishi UFJ Financial", "Daimler", "American Intl Group", "ING Group", "Nestlé", "Statoil", "Microsoft", "Banco Bradesco", "Ford Motor", "Nippon Telegraph &amp; Tel", "AXA Group", "Commonwealth Bank", "GDF Suez", "BHP Billiton", "Allianz", "Siemens", "Deutsche Bank", "Barclays", "Banco do Brasil", "MetLife", "Vale", "Telefónica", "Johnson &amp; Johnson", "Westpac Banking Group", "Honda Motor", "BMW Group", "Novartis", "General Motors", "Sumitomo Mitsui Financial", "China Life Insurance", "Verizon Communications", "Hewlett-Packard", "Lukoil", "Rio Tinto", "Royal Bank of Canada", "Rosneft", "UBS", "EDF", "BASF", "ENEL", "National Australia Bank", "Goldman Sachs Group", "Sanofi ", "ANZ", "Merck &amp; Co", "Comcast", "TD Bank", "Bank of America", "BBVA-Banco Bilbao Vizcaya", "Nissan Motor", "Intel", "Coca-Cola", "PepsiCo", "Saudi Basic Industries", "Sberbank", "Cisco Systems", "Bank of Nova Scotia", "Anheuser-Busch InBev", "Société Générale", "Mitsubishi Corp", "Hyundai Motor", "Zurich Financial Services", "Mizuho Financial", "Glencore International", "Ping An Insurance Group", "Ping An Insurance Group", "Intesa Sanpaolo", "Google", "Roche Holding", "UnitedHealth Group", "Caterpillar", "Unilever", "Bank of Communications", "Oracle", "France Telecom", "Standard Chartered", "América Móvil", "Prudential Financial", "Boeing", "American Express", "Kraft Foods", "CVS Caremark", "Tesco", "GlaxoSmithKline", "United Technologies", "Walt Disney", "US Bancorp", "Prudential", "Reliance Industries", "Credit Suisse Group", "China Shenhua Energy", "Abbott Laboratories", "Schlumberger", "Hitachi", "ArcelorMittal", "Iberdrola", "Xstrata", "Mitsui &amp; Co", "Suncor Energy", "Nordea Bank", "Bayer Group", "Ecopetrol", "UniCredit Group", "Anglo American", "Repsol YPF", "Dow Chemical", "AstraZeneca", "RWE Group", "Home Depot", "Occidental Petroleum", "Cnooc", "Bank of Montreal", "State Bank of India", "Canon", "TNK-BP Holding", "Posco", "Møller-Maersk", "Shanghai Pudong Dev Bk", "Itaúsa", "China Telecom", "Hon Hai Precision", "Generali Group", "News Corp", "Target", "China Merchants Bank", "Vinci", "EI du Pont de Nemours", "Philip Morris International", "Hutchison Whampoa", "Telecom Italia", "BG Group", "PTT PCL", "United Parcel Service", "Swiss Re ", "Jardine Matheson", "Oil &amp; Natural Gas", "Canadian Imperial Bank", "Dell", "EADS", "British American Tobacco", "JX Holdings", "Time Warner", "National Grid", "PNC Financial Services", "Munich Re", "Vivendi", "Capital One Financial", "McDonald's", "Volvo Group", "WellPoint", "ABB", "Renault", "Wesfarmers", "Softbank", "Deere &amp; Co", "KDDI", "Bank of New York Mellon", "Deutsche Telekom", "3M", "Schneider Electric", "Telstra", "Saint-Gobain", "Apache", "Sumitomo Corp", "Surgutneftegas", "Imperial Tobacco Group", "Honeywell International", "Union Pacific", "China Citic Bank", "Toshiba", "Lockheed Martin", "Qualcomm", "Eli Lilly &amp; Co", "L'Oréal Group", "Deutsche Post", "Christian Dior", "Amgen", "Shinhan Financial", "Aflac", "Japan Tobacco", "Itochu", "Bristol-Myers Squibb", "Southern Co", "Lowe's Cos", "Walgreen", "Exelon", "Danone", "Teva Pharmaceutical Inds", "Panasonic", "Barrick Gold", "Hyundai Heavy Industries", "China Minsheng Banking", "SAP", "Travelers Cos", "Altria Group", "Seven &amp; I Holdings", "SAIC Motor", "Denso", "EMC", "Freeport-McMoRan Copper", "Samsung Life Insurance", "Valero Energy", "Costco Wholesale", "Archer Daniels Midland", "Ericsson", "BT Group", "Tokio Marine Holdings", "Industrial Bank ", "General Dynamics", "CCCC-China Communications Construction", "Wilmar International", "SABMiller", "AIA Group", "SSE", "China Pacific Insurance", "Natixis", "ACE", "Kia Motors", "Diageo", "VTB Bank", "KB Financial Group", "Standard Bank Group", "Woolworths", "Medtronic", "DNB", "Kansai Electric Power", "Brookfield Asset Mgmt", "BCE", "Nippon Steel", "China State Construction", "East Japan Railway", "McKesson", "Hess", "Takeda Pharmaceutical", "FedEx", "Canadian Natural Resources", "BlackRock", "Gas Natural Group", "Time Warner Cable", "NextEra Energy", "Duke Energy", "Legal &amp; General Group", "Mitsubishi Electric", "Husky Energy", "Johnson Controls", "SEB", "Svenska Handelsbanken", "Sasol", "Taiwan Semiconductor", "Indian Oil", "Halliburton", "Marubeni", "Aetna", "SK Innovation ", "Air Liquide", "Linde", "Power Corp of Canada", "Emerson Electric", "TeliaSonera", "SingTel", "LyondellBasell Industries", "Continental", "Commerzbank", "State Street", "CaixaBank", "Icici Bank", "Central Japan Railway", "Danaher", "Devon Energy", "Marathon Petroleum ", "CNP Assurances", "Visa", "Bridgestone", "Sun Hung Kai Properties", "Allstate", "Swedbank", "BAE Systems", "Carnival", "Fiat Group", "Dominion Resources", "DBS Group", "Komatsu", "Marathon Oil", "Directv", "Eletrobrás", "China Everbright Bank", "Ebay", "American Electric", "Woori Finance Holdings", "FirstRand", "China Unicom", "Henkel", "Old Mutual", "Baoshan Iron &amp; Steel", "Chubu Electric Power", "Reckitt Benckiser Group", "Hyundai Mobis", "BB&amp;T", "Accenture", "Chubb", "National Oilwell Varco", "NTPC", "MTN Group", "Norilsk Nickel", "Amazon.com", "Enbridge", "Raytheon", "Metro AG", "Cigna", "OMV Group", "Saudi Telecom", "Carrefour", "Tata Motors", "Northrop Grumman", "Resona Holdings", "Baker Hughes", "NIKE", "Telenor", "Bouygues", "Teck Resources", "China Railway Group", "Mapfre", "Tyco International", "Garanti Bank", "Texas Instruments", "Inditex", "PPR", "Kimberly-Clark", "Loews", "TransCanada", "Maybank", "Grupo  ACS", "SK Holdings ", "WPP", "Koç Holding", "HCA Holdings", "Discover Financial Services", "Illinois Tool Works", "Rolls-Royce", "Michelin Group", "Viacom", "Bharti Airtel", "Pernod Ricard", "FirstEnergy", "Cardinal Health", "Express Scripts", "Baxter International", "Shenzhen Development  Bank", "Centrica", "EDP-Energias de Portugal", "International Paper", "CSX", "Fiat Industrial", "Chesapeake Energy", "Fresenius", "KPN", "Aviva", "Inpex", "PPL", "CEZ Group", "Monsanto", "Cenovus Energy", "General Mills", "Oversea-Chinese Banking", "JFE Holdings", "Coal India", "United Overseas Bank", "Norfolk Southern", "Macy's", "Canadian National Railway", "Mitsubishi Estate", "Royal Bank of Scotland", "E.ON", "Colgate-Palmolive", "Automatic Data", "Lafarge", "Ahold", "Lloyds Banking Group", "CBS", "Aeon", "CenturyLink", "Hartford Financial Services", "Covidien", "Consolidated Edison", "Heineken Holding", "Ameriprise Financial", "Tata Steel", "Humana", "Isbank", "Kyocera", "Las Vegas Sands", "Xerox", "Sistema JSFC", "Thermo Fisher Scientific", "China Vanke", "Fortum", "Corning", "PICC Property &amp; Casualty", "CLP Holdings", "Mitsui Fudosan", "QBE Insurance Group", "VimpelCom", "Fujitsu", "Femsa", "LG Chem", "Macquarie Group", "China Railway Construction", "Alstom", "Shin-Etsu Chemical", "Sabanci Holding", "Fujifilm Holdings", "Potash of Saskatchewan", "Mitsubishi Chemical", "Dongfeng Motor Group", "CRH", "Public Service Enterprise", "Merck", "Praxair", "Syngenta", "Gilead Sciences", "Raiffeisen Bank International", "Peugeot", "Bunge", "Manulife Financial", "Nomura Holdings", "Eaton", "Kroger", "Entergy", "Mosaic", "Novo Nordisk", "Compass Group", "Best Buy", "Orix", "Akbank", "CIC Group", "EOG Resources", "Delta Air Lines", "Rogers Communications", "Cummins", "Formosa Petrochemical", "Sempra Energy", "Sony", "Bank Rakyat Indonesia", "Crédit Agricole", "National Bank of Canada", "Fifth Third Bancorp", "UC Rusal", "SunTrust Banks", "HeidelbergCement", "Tokyo Gas", "Hana Financial Group", "Bank Mandiri", "H&amp;M", "Alcoa", "Aon", "Suncorp-Metway", "CIMB Group Holdings", "MCC", "Paccar", "Sysco", "Mitsubishi Heavy Industries", "Danske Bank", "Progressive", "Waste Management", "Grupo Mexico", "TE Connectivity", "Sampo", "Norsk Hydro", "Sumitomo Electric", "Aisin Seiki", "Goldcorp", "Nintendo", "Etisalat", "Richemont", "Hua Xia Bank", "Banca MPS", "Wm Morrison Supermarkets", "Suzuki Motor", "Telus", "Fubon Financial", "Nan Ya Plastic", "Lotte Shopping", "Akzo Nobel", "Dai-ichi Life Insurance", "HDFC Bank", "Hannover Re", "Formosa Chemicals", "United Continental Holdings", "China Steel", "China Coal Energy", "Larsen &amp; Toubro", "Atlas Copco", "Tatneft", "Sime Darby", "Qatar National Bank", "Otsuka Holding", "Asahi Glass", "J Sainsbury", "Swire Pacific", "Companhia Siderurgica", "Omnicom Group", "SK Telecom", "AMP", "Swisscom", "Cheung Kong Holdings", "Standard Life", "Saudi Electricity", "Safran", "Al Rajhi Bank", "TJX Cos", "Magna International", "Reynolds American", "Reed Elsevier", "Industrial Bank of Korea", "KT", "AmerisourceBergen", "Associated British Foods", "Holcim", "Xcel Energy", "Kohl's", "Kinder Morgan", "Adidas", "Charles Schwab", "HDFC", "Agrium", "Tenaris", "Carlsberg", "Principal Financial Group", "PPG Industries", "Marsh &amp; McLennan", "Kellogg", "Aegon", "Ferrovial", "Nucor", "Staples", "Murphy Oil", "Nokia", "Air Products &amp; Chemicals", "Yara International", "MS&amp;AD Insurance", "Toyota Tsusho", "Sandvik", "Toray Industries", "Korea Electric Power", "Chunghwa Telecom", "Franklin Resources", "Applied Materials", "Toyota Industries", "Keppel", "Huaneng Power Intl", "Transneft", "Astellas Pharma", "Alcatel-Lucent", "PGE Polska Grupa", "Sodexo", "S-Oil", "Cemig", "Sun Life Financial", "DISH Network", "ThyssenKrupp Group", "Research In Motion", "Progress Energy", "Spectra Energy", "New China Life Insurance", "Tele Norte Leste", "China Cosco Holdings", "Quanta Computer", "Novatek", "Yum Brands", "HTC", "MasterCard", "Anadarko Petroleum", "Westfield Group", "PKO Bank Polski", "Woodside Petroleum", "Li &amp; Fung", "Falabella", "MOL Hungarian Oil", "Kingfisher", "Wharf (Holdings)", "MGM Mirage", "Bankia", "Daiichi Sankyo", "George Weston", "Stryker", "Eurasian Natural Resources", "Sumitomo Realty &amp; Dev", "Talisman Energy", "Citic Pacific", "Bharat Heavy Electricals", "Philips", "CME Group", "Yanzhou Coal Mining", "HJ Heinz", "Starbucks", "Singapore Airlines", "GFNorte", "Deutsche Boerse", "Simon Property Group", "MTR", "Formosa Plastics", "Thales", "Newmont Mining", "Daqin Railway", "Samsung Fire &amp; Marine", "Asahi Group Holdings", "Nippon Yusen", "T&amp;D Holdings", "Galp Energia", "KBC Group", "Motorola Solutions", "Onex", "Rostelecom", "Grupo Pão de Açúcar", "Public Bank", "Unibail-Rodamco", "NKSJ Holdings", "Allied Irish Banks", "Sanlam", "Asahi Kasei", "Halkbank", "Swiss Life Holding", "Cencosud", "Antarchile", "Novolipetsk Steel", "Siam Commercial Bank", "Citic Securities", "Liberty Interactive", "PTT Global Chemical", "Royal DSM", "Tata Consultancy Services", "BRF-Brasil Foods", "Punjab National Bank", "Parker-Hannifin", "Adecco", "Fanuc", "Air France-KLM", "Banco Popular Español", "National Bank of Kuwait ", "Henderson Land", "Swatch Group", "Noble Group", "Kasikornbank", "Vedanta Resources", "Stanley Black &amp; Decker", "SLM", "Siam Cement", "BanColombia", "Marks &amp; Spencer", "Kubota", "RSA Insurance Group", "DTE Energy", "CPFL Energia", "ASML Holding", "Veolia Environnement", "Becton, Dickinson", "M&amp;T Bank", "Erste Group Bank", "British Sky Broadcasting", "Idemitsu Kosan", "LG Electronics", "Precision Castparts", "L-3 Communications", "Bank Central Asia"]
	faker.definitions.name_prefix	= faker.definitions.male_prefix.concat(faker.definitions.female_prefix);

	var SECOND	= 1000,
		MINUTE	= SECOND*60,
		HOUR	= MINUTE*60,
		DAY 	= HOUR*24,
		MONTH	= DAY*30,
		YEAR	= DAY*365;

	faker._meta = {
		apisToExpose : [
			{
				'value' 	: 'Name',
				'label'		: 'Name',
				'attributes': [
					{
						'value' : 'firstName',
						'label'	: 'Firstname'
					},
					{
						'value' : 'lastName',
						'label'	: 'Lastname'
					},
					{
						'value' : 'findName',
						'label'	: 'Random fullname'
					},
					{
						'value' : 'maleFullName',
						'label'	: 'Male fullname'
					},
					{
						'value' : 'femaleFullName',
						'label'	: 'Female fullname'
					}
				]
			},
			{
				'value' 	: 'Address',
				'label'		: 'Address',
				'attributes': [
					{
						'value' : 'zipCode',
						'label'	: 'Zip code'
					},
					{
						'value' : 'city',
						'label'	: 'City'
					},
					{
						'value' : 'streetName',
						'label'	: 'Street name'
					},
					{
						'value' : 'streetAddress',
						'label'	: 'Street address'
					},
					{
						'value' : 'secondaryAddress',
						'label'	: 'Secondary address'
					},
					{
						'value' : 'ukCountry',
						'label'	: 'U.K country'
					},
					{
						'value' : 'usState',
						'label'	: 'U.S state'
					},
					{
						'value' : 'latitude',
						'label'	: 'Latitude'
					},
					{
						'value' : 'longitude',
						'label'	: 'Logititude'
					},
					{
						'value' : 'geocode',
						'label'	: 'Geocode'
					}
				]
			},
			{
				'value' 	: 'PhoneNumber',
				'label'		: 'Phone number',
				'attributes': [
					{
						'value' : 'phoneNumber',
						'label'	: 'Phone number'
					}
				]
			},
			{
				'value' 	: 'Internet',
				'label'		: 'Internet',
				'attributes': [
					{
						'value' : 'email',
						'label'	: 'Email'
					},
					{
						'value' : 'userName',
						'label'	: 'Username'
					},
					{
						'value' : 'password',
						'label'	: 'Password'
					},
					{
						'value' : 'domainName',
						'label'	: 'Domain name'
					},
					{
						'value' : 'domainWorld',
						'label'	: 'Domain world'
					},
					{
						'value' : 'ip',
						'label'	: 'IP address'
					}
				]
			},
			{
				'value' 	: 'Company',
				'label'		: 'Companies',
				'attributes': [
					{
						'value' : 'companyName',
						'label'	: 'Name'
					},
					{
						'value' : 'catchPhrase',
						'label'	: 'Catchphrase'
					},
					{
						'value' : 'bs',
						'label'	: 'bs'
					}
				]
			},
			{
				'value' 	: 'Date',
				'label'		: 'Date',
				'attributes': [
					{
						'value' : 'randomDate',
						'label'	: 'Random date'
					},
					{
						'value' : 'toddler',
						'label'	: 'Toddler ( < 1 yo)'
					},
					{
						'value' : 'kid',
						'label'	: 'Kid (1-13 yo)'
					},
					{
						'value' : 'teenager',
						'label'	: 'Teenager (13-19 yo)'
					},
					{
						'value' : 'youngAdult',
						'label'	: 'Young adult (19-25 yo)'
					},
					{
						'value' : 'adult',
						'label'	: 'Adult (25-40 yo)'
					},
					{
						'value' : 'roughlyAge',
						'label'	: 'Roughly age (40-60 yo)'
					},
					{
						'value' : 'senior',
						'label'	: 'Senior ( > 60 yo)'
					}
				]
			},
			{
				'value' 	: 'Lorem',
				'label'		: 'Lorem',
				'attributes': [
					{
						'value' : 'sentence',
						'label'	: 'Sentence'
					},
					{
						'value' : 'paragraph',
						'label'	: 'Catchphrase'
					},
					{
						'value' : 'bs',
						'label'	: 'bs'
					}
				]
			}
		]
	}

	function getRandomNum() {

	    // between 0 - 1
	    var rndNum = Math.random()

	    // rndNum from 0 - 1000
	    rndNum = parseInt(rndNum * 1000);

	    // rndNum from 33 - 127
	    rndNum = (rndNum % 94) + 33;

	    return rndNum;
	}

	faker.Date = {}
	faker.Date.birthDate = function randomDate(minAge, maxAge) {
		var start 	= minAge*YEAR,
			end 	= maxAge*YEAR;

		start 	= new Date() - start;
		end 	= new Date() - end;

	    return new Date(start + Math.random() * (end - start));
	}

	faker.Date.randomDate	= function(){
		return this.birthDate(-100 , 100);
	}

	faker.Date.toddler	= function(){
		return this.birthDate(0 , 1);
	}

	faker.Date.kid	= function(){
		return this.birthDate(1 , 13);
	}

	faker.Date.teenager	= function(){
		return this.birthDate(13 , 19);
	}

	faker.Date.youngAdult	= function(){
		return this.birthDate(19 , 25);
	}

	faker.Date.adult	= function(){
		return this.birthDate(25 , 40);
	}

	faker.Date.roughlyAge	= function(){
		return this.birthDate(40 , 60);
	}

	faker.Date.senior	= function(){
		return this.birthDate(60 , 100);
	}

	faker.PhoneNumber.phoneNumber = function () {
		return faker.Helpers.replaceSymbolWithNumber(faker.definitions.phone_formats[1]);
    };

	faker.Name.femaleName = function(){
		return faker.random.female_name();
	}

	faker.Name.femaleFullName = function () {
        var r = faker.random.number(8);
        switch (r) {
	        case 0:
	        case 1:
	            return faker.random.female_prefix() + " " + this.femaleName() + " " + this.lastName();
        }

        return this.femaleName() + " " + this.lastName();
    };

	faker.Name.maleName = function(){
		return faker.random.male_name();
	}

	faker.Name.maleFullName = function () {
        var r = faker.random.number(8);
        switch (r) {
	        case 0:
	        case 1:
	            return faker.random.male_prefix() + " " + this.maleName() + " " + this.lastName();
        }

        return this.maleName() + " " + this.lastName();
    };

    faker.Name.findName = function () {
        var r = Faker.random.number(3);
        switch (r) {
	        case 0:
	            return this.maleFullName();
	        case 1:
	            return this.femaleFullName();
        }

        return this.firstName() + " " + this.lastName();
    };

    faker.Internet.password = function () {
		var length=8;
	    var sPassword = "";

	    var noPunction = false;
	    var randomLength = true;

	    if (randomLength) {
	        length = Math.random();

	        length = parseInt(length * 100);
	        length = (length % 7) + 6
	    }


	    for (i=0; i < length; i++) {

	        numI = getRandomNum();
	        if (noPunction) { while (checkPunc(numI)) { numI = getRandomNum(); } }

	        sPassword = sPassword + String.fromCharCode(numI);
	    }

	    return sPassword;
	}

	faker.Internet.email = function () {
        var res = faker.Helpers.slugify(this.userName()) + "@" + faker.Helpers.slugify(this.domainName());
        return res.toLowerCase();
    };

	faker.random.female_name = function(){
		return this.array_element(faker.definitions.female_name);
	}

	faker.random.female_prefix = function(){
		return this.array_element(faker.definitions.female_prefix);
	}

	faker.random.male_name = function(){
		return this.array_element(faker.definitions.male_name);
	}

	faker.random.male_prefix = function(){
		return this.array_element(faker.definitions.male_prefix);
	}

	faker.Address.geocode = function(){
		return this.latitude() + ', ' + this.longitude();
	}

	return faker;
})