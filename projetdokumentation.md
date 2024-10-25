# Projekt-Dokumentation

Haldimann Joël

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
| 1.1  | Startseite wird aufgerufen                                    | Keine                                                     | Eine übersichtliche Navbar wird oben angezeigt, mit Links zu den Hauptseiten (Projekte, About, Kontakt). |
| 2.1  | Projekte-Seite wird aufgerufen                                | Klick auf "Projekte" in der Navbar                        | Eine Liste der Projekte wird korrekt angezeigt, jedes Projekt hat einen Titel und eine kurze Beschreibung.   |
| 3.1  | Ein Projekt in der Liste ist sichtbar                         | Klick auf ein "Zum COde" eines Projekts | Der Quellcode des Projekts wird auf GitHub angezeigt.|
| 4.1  | About-Me-Seite wird aufgerufen                             | Klick auf "About" in der Navbar                     | Eine Liste der Fähigkeiten und Informationeen wird dargestellt. |
| 7.1  | Kontaktseite wird aufgerufen                                  | Klick auf "Kontakt" in der Navbar                         | Die Kontaktseite wird korrekt geladen, mit Kontankmöglichkeiten. |
| 8.1  | Webseite wird auf einem mobilen Gerät aufgerufen              | Keine                                                     | Die Webseite wird responsiv dargestellt. |

## 2 Planen

| AP-№ | Frist | Zuständig       | Beschreibung                                                                                     | geplante Zeit |
| ---- | ----- | --------------- | ------------------------------------------------------------------------------------------------ | ------------- |
| 1.A  | 25.10.2024      | Joël Haldimann  | Entwicklung und Strukturierung der Navbar sowie Implementierung der Navigation zu allen Hauptseiten | 3              |
| 1.B  | 25.10.2024      | Joël Haldimann  | Stilisierung der Navbar (Desktop-Version)                                                        | 2              |
| 2.A  | 25.10.2024      | Joël Haldimann  | Erstellen und Gestaltung der Footer- und Startseite                                              | 4              |
| 3.A  | 25.10.2024      | Joël Haldimann  | Aufräumen der GitHub-Repositories und Darstellung der besten Projekte auf der Webseite           | 1              |
| 4.A  | 25.10.2024      | Joël Haldimann  | Gestaltung der «About me» Seite                                                                  | 5              |
| 5.A  | 25.10.2024      | Joël Haldimann  | Programmierung der Contact-Seite                                                                 | 2              |
| 6.A  | 25.10.2024      | Joël Haldimann  | Optimierung der gesamten Webseite für große und kleine Bildschirme                               | 2              |
| 6.B  | 25.10.2024      | Joël Haldimann  | Anpassung der Webseite für mobile Geräte (Responsive Design)                                     | 7              |

Total: 26
Puffer: 4

## 3 Entscheiden

Ich habe mich dazu entschieden eine Portfolio Webseite mit React zu programmieren

## 4 Realisieren

| AP-№ | Datum | Zuständig | geplante Zeit | tatsächliche Zeit |
| ---- | ----- | --------- | ------------- | ----------------- |
| 1.A  | 23.08.2045      | Joël Haldimann          | 135 min              | 150 min                  |
| 1.B  | 23.08.2045      | Joël Haldimann          | 90 min              | 70 min                  |
| 2.A  | 30.08.2024      | Joël Haldimann          | 180 min              | 190 min                  |
| 3.A  | 06.09.2024      | Joël Haldimann          | 45 min              | 80 min                  |
| 4.A  | 06.09.2024      | Joël Haldimann          | 225 min              | 205 min                  |
| 5.A  | 13.09.2024      | Joël Haldimann          | 90 min             | 60 min                  |
| 6.A  | 13.09.2024      | Joël Haldimann          | 90 min              | 110 min                  |
| 6.B  | 14.10.2024      | Joël Haldimann          | 315 min              | 305 min                  |


## 5 Kontrollieren

| TC-№ | Datum | Resultat | Tester |
| ---- | ----- | -------- | ------ |
| 1.1  | 25.10.2024      | OK         | Joël Haldimann       |
| 2.1  | 25.10.2024      | OK         | Joël Haldimann       |
| 3.1  | 25.10.2024      | OK         | Joël Haldimann       |
| 4.1  | 25.10.2024      | OK         | Joël Haldimann       |
| 5.1  | 25.10.2024      | OK         | Joël Haldimann       |
| 6.1  | 25.10.2024      | OK         | Joël Haldimann       |
| 7.1  | 25.10.2024      | OK         | Joël Haldimann       |
| 8.1  | 25.10.2024      | OK         | Joël Haldimann       |
