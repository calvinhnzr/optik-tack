# Optik Tack

Abschlussprüfung Sommer 2020

Ausbildung zum Mediengestalter Digital und Print

## Loslegen

`[HINWEIS] Falls Sie Probleme mit der Installation haben sollten, finden Sie unter folgenden Links den Quellcode sowie eine Live-Version der Website. Die Website lässt sich außerdem als PWA installieren.`

[Quellcode](https://github.com/calvinhnzr/optik-tack)

[Live Demo](https://optik-tack.app/)

`[HINWEIS] Die Website wurde für die aktuellste Version des Chrome Browsers erstellt und optimiert und ist daher zu empfehlen.`

[Google Chrome Browsers](https://www.google.com/intl/de/chrome/)

Für die Entwicklung der Website habe ich ausschließlich mit den Verzeichnissen `src` und `static` gearbeitet. Andere Ordner und Dateien sind entweder automatisch generiert oder vom Starter Theme vorgegeben und sollten nicht verändert werden.

Für die Entwicklung der Website habe ich das Framework [Gatsby](https://www.gatsbyjs.org/) sowie ein [Starter Theme](https://github.com/gatsbyjs/gatsby-starter-default) verwendet. Das Starter Theme enthält einige nützliche Plugins und Konfigurationen.

Bitte führen Sie folgende Schritte aus, um die Website lokal aufzuführen.

### Voraussetzungen

#### Installieren Sie Node und npm

Node.js ist eine JavaScript-Laufzeitumgebung, die für die Verwendung von Gatsby notwendig ist.
Mit der Installation von Node.js kommt der Paketmanager npm automatisch mit. Die aktuellste Version können Sie unter folgender Adresse herunterladen und installieren: [nodejs.org](https://nodejs.org)

### Installation

1. Fügen Sie den Ordner `optik-tack-master` Ihrem Schreibtisch hinzu und öffnen Sie ihn mit Ihrer präferierten Entwicklungsumgebung. Empfohlen ist Visual Studio Code: [code.visualstudio.com](https://code.visualstudio.com/)

2. Öffnen Sie das Terminal ihres Betriebsystems und geben Sie folgenden Befehl ein, um den Gatsby Client zu installieren. Die Eingabe des Admin-Passworts könnte erforderlich sein.

```
sudo npm install -g gatsby-cli
```

3. Anschließend lassen Sie sich alle Verzeichnisse im Root anzeigen. Dies verschafft Ihnen einen ersten Überblick.

```
ls
```

4. Wenn Sie das Verzeichnis `Schreibtisch` gefunden haben, geben Sie folgenden Befehl ein, um zum Schreibtisch zu gelangen. Je nach Systemsprache, geben Sie bitte die jeweilige Übersetzung ein: `cd desktop`

```
cd schreibtisch
```

5. Geben Sie folgenden Befehl ein, um in den Ordner `opik-tack-master` zu gelangen.

```
cd optik-tack-master
```

6. Um die benötigten Node Module zu installieren, geben Sie folgenden Befehl ein.

```
npm install
```

7. Um das Projekt nun zu bauen, geben Sie folgenden Befehl ein. Dies ist notwendig, damit die Website lokal läuft.

```
gatsby build
```

## Starte Lokalen Server

Um den lokalen Server zu starten, geben Sie folgenden Befehl ein.

```
gatsby serve
```

Unter `localhost:9000` ist die Website nun in Ihrem Browser erreichbar.

Zusätzlich können Sie die Website auch In Ihrem Netwerk laufen lassen, um die Website beispielsweise auf Ihrem Smartphone aufzurufen.

-H IP-Adresse Ihres Rechners

-p Beliebiger Port

e.g.:

```
gatsby serve -H 192.168.0.1 -p 9001
```

## Entwicklung

Um die lokale Entwicklungsumgebung zu starten, geben Sie folgenden Befehl ein. Der Entwickler-Modus enthält einige hilfreiche Debug-Tools.

```
gatsby develop
```

## Ordner Struktur

In dem Gatsby Projekt finden wir einige Ordner und Dateien. Im folgenden werde ich die wichtigsten erläutern.´

```
/
|-- /node_modules
|-- /.cache
|-- /public
|-- /src
|-- /static
|-- gatsby-config.json
|-- package.json
```

1. `/node_modules` Vorhin heruntergeladene Node Module.

2. `/.cache` Automatisch erzeugt. Speichert den namensgebenden cache des Gatsby Projekts.

3. `/public` Automatisch erzeugt. Speichert den Output nach dem Build Prozess.

4. `/src` Enthält sämtliche JavaScript und CSS Dateien die vom Autor erstellt worden sind. Dazu später mehr.

5. `/static` Enthält Dateien die nicht vom Build Prozess beeinflusst werden. Bespielsweise Schriften.

6. `gatsby-config.js` Benötigt um u.a. Gatsby Plugins zu konfigurieren und Metadaten wie `title` oder `discription` zu setzen.

7. `package.json` Übersicht verwendeter Plugins, Technologien und Skripte.

Im folgenden werde ich den Aufbau des `src` Ordners erläutern.

```
/src
|-- /components
|-- /images
|-- /modules
|-- /pages
|-- /styles
|-- html.js
```

1. `/components` Dieser Ordner enthält sämtliche React-Komponenten. Vergleichbar mit verschiedenen Bereichen einer HTML Datei.

2. `/images` Verwendete Bilder und Grafiken.

3. `/modules` SCSS Module zu passenden React-Komponenten.

4. `/pages` Verwendete Seiten: Index und 404.

5. `/styles` Globale Styles wie Fonts oder Reset.

6. `html.js` Automatisch erzeugt und editierbar. Entält Daten über das HTML Dokument sowie das Head-Element.

## Verwendete Technologien

Framework: GatsbyJS

Libraby: ReactJS

Query Language: GraphQL

Local Server Environment: NodeJS

Package Manager: npm

## Quellen verwendeter Denpendencies und Plugins

1. [gatsby](https://www.gatsbyjs.org/)
2. [gatsby-image](https://www.gatsbyjs.org/packages/gatsby-image/)
3. [gatsby-plugin-google-analytics](https://www.gatsbyjs.org/packages/gatsby-plugin-google-analytics/?=goog)
4. [gatsby-plugin-manifest](https://www.gatsbyjs.org/packages/gatsby-plugin-manifest/?=gatsby-plugin-manifest)
5. [gatsby-plugin-offline](https://www.gatsbyjs.org/packages/gatsby-plugin-manifest/?=gatsby-plugin-offline)
6. [gatsby-plugin-react-helmet](https://www.gatsbyjs.org/packages/gatsby-plugin-react-helmet/?=gatsby-plugin-react-helmet)
7. [gatsby-plugin-sass](https://www.gatsbyjs.org/packages/gatsby-plugin-sass/?=gatsby-plugin-sass)
8. [gatsby-plugin-sharp](https://www.gatsbyjs.org/packages/gatsby-plugin-sass/?=gatsby-plugin-sharp)
9. [gatsby-source-filesystem](https://www.gatsbyjs.org/packages/gatsby-source-filesystem/?=gatsby-source-filesystem)
10. [gatsby-transformer-sharp](https://www.gatsbyjs.org/packages/gatsby-transformer-sharp/?=gatsby-transformer-sharp)
11. [node-sass](https://www.npmjs.com/package/node-sass)
12. [prop-types](https://www.npmjs.com/package/prop-types)
13. [react](https://reactjs.org/)
14. [react-dom](https://reactjs.org/docs/react-dom.html)
15. [react-helmet](https://github.com/nfl/react-helmet)
16. [react-icons](https://react-icons.github.io/react-icons/)
17. [react-scrollspy](https://makotot.github.io/react-scrollspy/)
18. [react-transition-group](https://reactcommunity.org/react-transition-group/)
19. [npm](https://www.npmjs.com/)
20. [node](https://nodejs.org/en/)
