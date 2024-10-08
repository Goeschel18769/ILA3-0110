# Projekt-Dokumentation

☝️ Alle Text-Stellen, welche mit einem ✍️ beginnen, können Sie löschen, sobald Sie die entsprechende Stellen ausgefüllt haben.

Jool Klein/Haldimann Joël

| Datum | Version | Zusammenfassung                                              |
| ----- | ------- | ------------------------------------------------------------ |
|       | 0.0.1   | ✍️ Jedes Mal, wenn Sie an dem Projekt arbeiten, fügen Sie hier eine neue Zeile ein und beschreiben in *einem* Satz, was Sie erreicht haben. |
|       | ...     |                                                              |
|       | 1.0.0   |                                                              |

## 1 Informieren

### 1.1 Ihr Projekt

Ich möchte eine Portfolio Webseite programmieren, auf der man Daten von mir, Projekte und Kontaktmöglichkeiten finden kann.

### 1.2 User Stories

| US-№ | Verbindlichkeit | Typ  | Beschreibung                                                     |
| ---- | --------------- | ---- | ---------------------------------------------------------------- |
| 1    | Muss            | Funktional | Als Besucher möchte ich eine übersichtliche Navbar sehen, damit ich schnell auf die wichtigsten Informationen zugreifen kann. |
| 2    | Muss            | Qualität | Als Besucher möchte ich eine Liste der Projekte sehen, damit ich einen Überblick über die bisherigen Arbeiten bekomme. |
| 3    | Muss            | Qualität | Als Besucher möchte ich den Code einiger gezeigten Projekte einsehen können |
| 4    | Muss            | Quallität | Als Besucher möchte ich eine Liste meiner Fähigkeiten sehen, damit ich meine Kompetenzen einschätzen kann. |
| 6    | Muss            | Qualität | Als Besucher möchte ich interessante Fakten über mich sehen, damit ich einen besseren persönlichen Eindruck bekomme. |
| 7    | Muss            | Qualität | Als Besucher möchte ich eine Kontaktseite finden, damit ich leicht mit dir in Verbindung treten kann. |
| 8    | Muss          | Qualität   | Als Besucher möchte ich, dass die Webseite auf mobilen Geräten gut aussieht, damit ich auch unterwegs darauf zugreifen kann. |

### 1.3 Testfälle

| TC-№ | Ausgangslage                                                  | Eingabe                                                   | Erwartete Ausgabe                                                                                           |
| ---- | ------------------------------------------------------------- | --------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| 1.1  | Startseite wird aufgerufen                                    | Keine                                                     | Eine übersichtliche Navbar wird oben auf der Seite angezeigt, mit Links zu den Hauptseiten (Projekte, Fähigkeiten, Kontakt). |
| 2.1  | Projekte-Seite wird aufgerufen                                | Klick auf "Projekte" in der Navbar                        | Eine Liste der Projekte wird korrekt angezeigt, jedes Projekt hat einen Titel und eine kurze Beschreibung.   |
| 3.1  | Ein Projekt in der Liste ist sichtbar                         | Klick auf ein "Code anzeigen" oder "GitHub-Link" eines Projekts | Der Quellcode des Projekts wird entweder in einem neuen Tab (z.B. auf GitHub) oder eingebettet in der Webseite angezeigt. |
| 4.1  | Fähigkeiten-Seite wird aufgerufen                             | Klick auf "Fähigkeiten" in der Navbar                     | Eine Liste der Fähigkeiten wird korrekt dargestellt, kategorisiert nach verschiedenen Bereichen (z.B. Webentwicklung, Design). |
| 6.1  | Über-mich-Seite wird aufgerufen                               | Klick auf "Über mich" in der Navbar                       | Interessante persönliche Fakten und Informationen werden auf der Seite korrekt dargestellt.                 |
| 7.1  | Kontaktseite wird aufgerufen                                  | Klick auf "Kontakt" in der Navbar                         | Die Kontaktseite wird korrekt geladen, mit Kontaktinformationen. |
| 8.1  | Webseite wird auf einem mobilen Gerät aufgerufen              | Keine                                                     | Die Webseite wird responsiv dargestellt. |
### 1.4 Diagramme

✍️Fügen Sie hier ein Use Case-Diagramm mit mindestens 3 Anwendungsfällen ein; und eine Skizze davon, wie Ihre Netzseite aussehen sollte.

## 2 Planen

| AP-№ | Frist     | Zuständig | Beschreibung                                               | geplante Zeit |
| ---- | --------- | --------- | ---------------------------------------------------------- | ------------- |
| 1.A  | 30.08.2024   | Joël Haldimann    | Entwicklung und Strukturierung der Navbar sowie Implementierung der Navigation zu allen Hauptseiten | 3 Lektionen   |
| 1.B  | 30.08.2024  | Joël Haldimann    | Stilisierung der Navbar (Desktop-Version)                  | 3 Lektion     |
| 2.A  | [Frist]   | Joël Haldimann    | Erstellen der Projekte-Seite, Einfügen von Projektinformationen und Implementierung der Projektliste | 4 Lektionen   |
| 2.B  | [Frist]   |Joël Haldimann   | Hinzufügen von Links zum Code  der Projekte und Testen der Links | 1 Lektionen   |
| 3.A  | [Frist]   | Joël Haldimann    | Erstellen der About me Seite, Einfügen und Kategorisieren der Daten | 2 Lektionen   |
| 3.B  | [Frist]   | Joël Haldimann   | Stilisierung der Fähigkeiten-Seite                         | 3 Lektion     |
| 4.A  | [Frist]   | Joël Haldimann   | Erstellen der Über-mich-Seite, Hinzufügen von persönlichen Fakten und Bildern | 2 Lektionen   |
| 4.B  | [Frist]   |Joël Haldimann   | Stilisierung der Über-mich-Seite                           | 3 Lektion     |
| 5.A  | [Frist]   | Joël Haldimann   | Erstellen der Kontaktseite | 2 Lektionen   |
| 6.A  | [Frist]   | Joël Haldimann    | Anpassung der gesamten Webseite für mobile Geräte (Responsive Design) | 6 Lektionen   |
| 6.B  | [Frist]   | Joël Haldimann  | Testen der Webseite auf verschiedenen Browsern             | 2 Lektion     |

Total: 31
Puffer: 4

## 3 Entscheiden

Ich habe mich dazu entschieden eine Portfolio Webseite mit React zu programmieren

## 4 Realisieren

| AP-№ | Datum | Zuständig | geplante Zeit | tatsächliche Zeit |
| ---- | ----- | --------- | ------------- | ----------------- |
| 1.A  |       |           |               |                   |
| ...  |       |           |               |                   |

✍️ Tragen Sie jedes Mal, wenn Sie ein Arbeitspaket abschließen, hier ein, wie lang Sie effektiv dafür hatten.

## 5 Kontrollieren

| TC-№ | Datum | Resultat | Tester |
| ---- | ----- | -------- | ------ |
| 1.1  |       |          |        |
| ...  |       |          |        |

✍️ Vergessen Sie nicht, ein Fazit hinzuzufügen, welches das Test-Ergebnis einordnet.

## 6 Auswerten

✍️ Fügen Sie hier eine Verknüpfung zu Ihrem Lern-Bericht ein.

