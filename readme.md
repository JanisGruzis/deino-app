# Deino

Deino piedāvā elegantu un daudzpusīgu risinājumu jaunāko ziņu iegūšanai. Lietotnē ir apkopotas visas jaunākās ziņas, kuras ir iespējams gan filtrēt, gan kārtot, lai katrs varētu pēc iespējas vienkāršāk piekļut tieši sev interesējošajai informācijai.
Deino lietotnē tiek realizēts klāsterēšanas algoritms, kas atrod un sagrupē ziņas par vienu un to pašu notikumu. Tas nodrošina iespēju vienkārši swipe’ot pār konkrētu notikumu, lai apskatītu kā šo notikumu attēlo cits mēdijs, bez nepieciešamības apmeklēt nebeidzamu skaitu ziņu portālu.

Šobrīd tiek piedāvāts aplūkot ziņas no vairākiem ziņu portāliem:
* Apollo (http://apollo.lv)
* Delfi (http://delfi.lv)
* Diena (http://diena.lv)
* LSM (http://lsm.lv)
* TVNET (http://tvnet.lv)

### Galvenās priekšrocības:
* sakārtotas ziņas pēc to nozīmes, nodrošināt iespēju ātri uzzināt svarīgākos notikumus
* viegla iespēja iegūt daudzpusīgu skatu par konkrētu ziņu notikumu;
* advancētas meklēšanas iespējas, kas nodrošina pēc iespējas ātrāk un efektīvāk atrast meklēto
* kategorizētas ziņas, kas nodrošina iespēju apskatīt tikai interesējošos ziņu tematus

## Instalācija

Ja jūs gribāt lietot projektu no sava servera, jūms vajag:
Novilkt (pull) repozitoriju
```javascript
git pull https://github.com/JanisGruzis/deino-app
```
Lai padarītu pull pieprasījumu ātrāk, risinājumā izmantotas bibliotēkas netiek glābti repozitorijā. Tie tiek pārvaldīti ar bower (http://bower.io/). Bower, savukārt, prasa node.js vidi (https://nodejs.org/).
Lai instalētu atkarības, no vecāku direkotrijas izpildiet:
```javascript
bower install
```
Tagad jūs varat izvietot index.php failu savā serverī. Ja jums lokalā mašīna nav konfigurēts PHP serveris, mēs iesakām izmantot XAMPP (https://www.apachefriends.org/index.html)

Lietotni arī tika iepakota kā native-lietotne priekš Windows Phone. To var lejupladēt šeit: http://www.windowsphone.com/s?appid=1d1cc60a-f220-4d3d-ab09-3cf75c0c9145

## Projekta vēsture

Projekts ir izveidots kā pieteikums "Clusterpoint Challenge" konkursām (https://challenge.clusterpoint.com/).

## Izstrādātāji

Janis Gruzis
Roberts Darģis
Aleksandrs Rilins
Aleksandrs Košeļevs

## Ieguldījumi

1. Nodakšo (fork it)!
2. Izveidojiet savu zaru: `git checkout -b my-new-feature`
3. Nofiksējat savas izmaiņas: `git commit -am 'Add some feature'`
4. Uztaisiet pull uz zaru: `git push origin my-new-feature`
5. Iesniedziet pull pieprasījumu

## License

Lietotne ir izstrādāta zem "GNU General Public License" licences (https://www.gnu.org/copyleft/gpl.html).