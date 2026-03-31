Workbench datamodel löytyy repon sisältä omana filunaan.



14.3.2026 --> Palautettu 1 ja 2 -osiot projektista. 3-osiosta oma repolinkki myöhemmin.



https://github.com/maijakuu/openAQ\_datamigration



19.3.2026 --> Palautettu 3-osio projektista. 



https://github.com/maijakuu/openAQ\_react



1.4.2026 --> palautettu korjattu versio projektista

https://github.com/maijakuu/openAQ\_datamigration

https://github.com/maijakuu/openAQ\_react



1. Tietokantasuunnitelma



\- ~~kaikki sarakkeet perus- ja viiteavaimet poislukien ovat nullableja -9~~  **Tämä korjattu, kaikki vaihdettu not-nullable**

~~- locations-talulussa lat, lon, location ovat sarakkeita, jotka kuvaavat mittauspistettä, mutta city ja country ovat sarakkeita, joiden pitäisi olla normalisoinnin sääntöjen mukaan omissa tauluissaan. Kannattaa laittaa country ja city omiin erillisiin tauluihin. - 10~~ **city ja country vaihdettu omiin tauluihinsa, muutoksen myötä datamigraatio tehty kokonaan udelleen eli database rakennettu alusta. Model liitetiedostona palautuksissa.**



3\. Rest API



~~1) requirements.txt:ssä on listattuna yksitellen kaikki sisäisetkin riippuvuudet.~~ **requirements.txt korjattu, laitettu vain pääriippuvuudet.**





~~2) jokainen kysely päättyy Internal Server Erroriin "psycopg2.errors.UndefinedTable: relation "openaq.locations" does not exist~~

~~LINE 1: SELECT location\_id, city FROM openaq.locations"~~



~~Kyselyt alkoivat toimia, kun otin openaq. pois taulun nimen edestä~~  



**Uuden database rakennuksen myötä kaikki data on nyt openaq\_db *public* -skeemassa. .env tiedostosta myös poistettu reititys alkuperäiseen openaq -skeemaan ja Rest api koodia muokattu niin, että ei viittaa openaq enää.**





