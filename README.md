# submodule-poc

Les sources sont compilées et testées dans cet environnement, mais css-package est un sous-module qui pointe vers le repo Kuzcoo/css-package.

css-package reste ainsi indépendant et peut être utilisé dans un autre repo ou être une dépendance npm complétement décorrellé de l'environnement dans lequel les css sont testées ou présentées.

Afin de récupérer le repo conteneur (super project) et son sous-module, il faut cloner, initialiser et updater le sous module comme suit:
```
git clone url_repo_conteneur
git submodule init
git submodule update
```

Celà nous permet de récupérer les contenu du sous module.
Attention, le contenu du sous module correspond au dernier commit de ce dernier référencé par notre repo conteneur.
Le repo conteneur enregistre le dernier commit du sous module sur lequel il pointe.
Il est possible que les deux soient désynchronisés.

A noter que si on se place à la racine du répértoire sous module nous sommes dans le repo git de celui-ci.
C'est un repo imbriqué dans un repo.
Nous changeons de repo, et nous avons désormais accès à l'historique du repo sous-module.

Par défaut lorsqu'on récupère un sous module et qu'on se place dessus, celui est en en-tête détaché.
Il faudra veiller à se mettre sur master ou une autre branche si on veut mettre à jour la remote sur laquelle notre repo contenur pointera.

```
git checkout master
git add my_file
git commit -m "update submodule"
cd -
git add -p
git ci -m "sync with last commit of submodule's master"
git push
```

###Ajouter submodule et tracker modifs depuis conteneur (super project)

Ajouter submodule à repo courant:

```
git submodule add git_url_submodule target_dir
```

Pousser la relation sur la branche distante:
```
git add -p 
git commit -m "add submodule"
git push
```

Tracker les messages de commit du sous module depuis conteneur:
```
git config --global status.submoduleSummary true
```
