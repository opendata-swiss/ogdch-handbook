# Handbook for opendata.swiss

## About

This is the handbook for [opendata.swiss](https://opendata.swiss/).
It is published at https://handbook.opendata.swiss.

### Content and Target Group

The handbook is targeted towards data publishers and data users:

- data publishers get guidance on how to publish their data for themselves
  and on opendata.swiss
- data users find instructions on how to use the data via api and
  how to search for data on opendata.swiss

### Language Versions

It is currently available in the two languages German and French. German is its original
language and French is added as a translation. Some content is provided in English
language, which is currently not considered as a translation but rather as a fallback
for text, that does not come with language versions yet.

### History

This repo replaces the previous version of the handbook, which can be found here:
https://github.com/opendata-swiss/ogd-handbook-site

## Technical setup

The handbook is implemented with [Sphinx](https://www.sphinx-doc.org/en/master/),
Sphinx is a static site generator for documentations.
The source code is written in [reStructuredText](https://en.wikipedia.org/wiki/ReStructuredText).

The handbook is structured into:
- The **Source**: as reStructuredText
- The **Translations**: as string translations

The **Source** can be found at `source/content` with some pages such as the homepage `source/index.rst`
directly in the `source` directory. All source files have the ending `.rst` as they contain
reStructuredText.
Most source files are in German language, some are written in English.
No matter what language of these files are in: German or English: the `.rst` files are considered together as
the German/source version of the handbook.

The **Translations** can be found at `source/locale`. They contain text strings that have
been extracted from the **Source**. These text strings are stored along with translations in `.po` files.
If no translation is given in these files: the fallback is the original text in the **Source**.
The tool used for translations is
[sphinx-intl](https://www.sphinx-doc.org/en/master/usage/advanced/intl.html)

**Locales**: Currently there are two locales of the handbook:
- a German locale at `source/locale/de`: the translations there are left empty, so that the fallback, the **Source**
  is used
- a French locale at `source/locale/fr`: stores the translatable strings from the **Source** together with French
  translations for all German texts. English texts have not been translated.

## Local development

### Setup

The handbook can be downloaded and setup locally on your Computer.
First open a terminal window and clone the repo:

```commandline
git clone git@github.com:opendata-swiss/ogdch-handbook.git
cd ogdch-handbook
```

If you want to be able to build the handbook locally from its
**Source**, then you need to set up the virtual python3 environment and install the
requirements, as shown below:

```commandline
python3 -m venv p3venv
source p3venv/bin/activate
pip install wheel
pip install -r requirements.txt
cp .env.dist .env
```

Now everything is set up, and you will be able to build the handbook locally and then view it
in your browser.

### Build the German locale

The German locale is built from `source/locale/de` with the following commands:
The commands to build the Locale are started from the main directory of the project.

```commandline
make clean
make -e SPHINXOPTS="-D language='de'" BUILDDIR="build/de" html
```

```commandline
sphinx-build source build/de -D language='de' -b html
```

`make clean` ensure that the build process starts from scratch. Otherwise, some
existing parts might be kept by Sphinx to make the build faster. For text changes
it is usually sufficient to just call the build command, but for js, css changes
or when adding new pages to the navigation the build must be started from scratch.

- go to `build/de/`
- run `index.html` in a browser of your choice


### Build the French locale

The French locale is built from `source/locale/fr` with the following command:

```commandline
make -e SPHINXOPTS="-D language='fr'" BUILDDIR="build/fr" html
```

```command specific for windows
sphinx-build source build/fr -D language='fr' -b html
```

- go to `build/fr/`
- run `index.html` in a browser of your choice

### Make changes to the Source

The source of the handbook is located at the following places:

- `source/content` for the chapters
- `source/index.rst` for the main page

In order to make changes just edit the corresponding `.rst` files.

:warning: be aware that the French translations will stop working if you change German
text, that has a French translation stored in the French locale.

### Update the French Translation

When you changed a text in the **Source**, that has a translation in the French Locale,
you also need to change the corresponding extracted string in the Locale, so that the new
string can be found together with its translation when the Locale is built.

#### Identify the change in the Source

Find the file where you made changes in the `source` directory:

Example:  `source/index.rst`

```
Schön, dass Sie Open Government Data publizieren möchten! Wir unterstützen Sie dabei.
=====================================================================================
```

was changed to:

```
Gut, dass Sie Open Government Data publizieren möchten! Wir unterstützen Sie dabei.
=====================================================================================
```

#### Identify the translation in the Locale

Find the corresponding `.po` file in the `locale/fr` directory:

In the example this would be `locale/fr/LC_MESSAGES/index.po`

```
#: ../../source/index.rst:15
msgid ""
"Schön, dass Sie Open Government Data publizieren möchten! Wir "
"unterstützen Sie dabei."
msgstr ""
"Vous souhaitez publier des données publiques ouvertes? Nous vous "
"apportons notre soutien!"
```

#### Adapt the translation in the Locale

Change the old string and replace it with the new string:

```
#: ../../source/index.rst:15
msgid ""
"Gut, dass Sie Open Government Data publizieren möchten! Wir "
"unterstützen Sie dabei."
msgstr ""
"Vous souhaitez publier des données publiques ouvertes? Nous vous "
"apportons notre soutien!"
```

Once that is done the French locale can be built again and the translation will be fixed.

### Extracting translatable strings from the Source

The `.po` files in the Locales don't have to be set manually: they can be generated.
The way to generate them is the following:

#### Command for translatable strings extraction

The following command extracts all translatable strings from the **Source**:

```
make gettext
```

It generates a new directory in the `build` directory: `build/gettext`
The directory tree matches that of the `source/locale` directory trees.
So for every `.rst` file in the **Source** it contains a `.pot` file

#### Identify the translatable String for your Source change

Find the `.pot` file that contains the translatable strings.

In the example above this would be `build/gettext/index.pot`

```
#: ../../source/index.rst:15
msgid "Schön, dass Sie Open Government Data publizieren möchten! Wir unterstützen Sie dabei."
msgstr ""
```

#### Transfer the translatable string to the Locale

Copy this into the `locale/fr/LC_MESSAGES/index.po` and replace the old phrase there with this
new phrase:

```
#: ../../source/index.rst:15
msgid ""
"Gut, dass Sie Open Government Data publizieren möchten! Wir "
"unterstützen Sie dabei."
msgstr ""
"Vous souhaitez publier des données publiques ouvertes? Nous vous "
"apportons notre soutien!"
```

Now you would be again ready to build the French Locale.

### Command to transfer the translatable strings automatically

The translatable string can be automatically transferred from the `.pot`files to the
Locales.

```commandline
sphinx-intl update -p build/gettext -l de -l fr
```

:warning: Use this command with care as it has the following pitfalls:

- some translations are marked with `#, fuzzy` in the Locales by the command and this line has to be removed, so that
  the translations will work
- The command can't be restricted to just some files: it will update all file in the Locales that it identifies as
  needing a change

### Linkchecker

Sphinx also comes with a builtin linkchecker command.
When called, it will check all external links in the documentation.

```commandline
make linkcheck
```

## Environment specific settings

The following setting can be adjusted to the environment:
see `.env.dist` for example settings.

- `ENABLE_HYPOTHESIS`: if `true`: an [Hypothes.is Overlay is set up](https://web.hypothes.is/). It can be used to
  discuss handbook content within a group.
- `ROBOTS_DIRECTIVE`: if set to `noindex` prevents search engines from indexing the site

## Deployment

Updated documentation can be deployed using GitHub Actions. The workflows and scripts for this are found in the
directory `.github/`.

### Deployment environments

There are two environments that can be deployed to, TEST and PROD, which are defined in the
[environments settings page](https://github.com/opendata-swiss/ogdch-handbook/settings/environments).
Here you can add secret variables that are necessary for deployment (server addresses, credentials, etc.) and change
which users can approve deployment.

Non-secret environment-specific settings (e.g. `ENABLE_HYPOTHESIS`) can be set in the file
`.github/workflows/build_and_deploy.yml`.

### Deploy to TEST environment

Any updates that are merged to the `master` branch will be automatically deployed to the TEST website.
The history of deployments can be seen here: https://github.com/opendata-swiss/ogdch-handbook/actions.

### Deploy to PROD environment

Updates merged to the `master` branch can also be deployed to the PROD website, but this requires approval from one of
the repository contributors.

- Go to the history of deployment workflows: https://github.com/opendata-swiss/ogdch-handbook/actions.
- Select the most recent deployment (or whichever one you wish to deploy to PROD). Check that deployment to TEST was
  successful.
- There should be a yellow bar across the page, asking for a review to deploy to the environment `prod`. Click the
  button marked "Review deployments", check the box for the `prod` environment, and then click "Approve and deploy".
- See the [GitHub Actions docs](https://docs.github.com/en/actions/managing-workflow-runs/reviewing-deployments)
  for more details.

### Special cases

Changes to the Apache configuration of the website and url redirection cannot be made from this repository. There is a
separate, private repository where these details are stored.
