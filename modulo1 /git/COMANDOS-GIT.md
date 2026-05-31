#Incluir al stage 

```bash
git add.
git add archivo_especifico.py
```


#Visualizar cambios 

```bash
git status
```

#Comprometer o seleccionarcambios para subir al repositorio remoto

```bash
git commit -m "Hola xd"
```

#Establecer configuraciones basica 

```bash
git config --global user.mail "andrsflp68@hotmail.com"
git config --global core.editor "code --wait"
git config --global color.ui auto
git config --global user.name "AnrresJurado"
git config --global init.defaultBranch main

git config --list 
git config user.name
git config user.email
```

#Consultar Logs
...

```bash
git log 
git log --oneline
git log --onlien --graph --all
git log --stat
git log -p
git log -5
git log --online -10
git log --author="andrsflp68@hotmail.com"
### por fecha
git log --after="2026-01-01"
git log --before="2026-04-01"
git log --after="2026-01-01" before="2026-04-01"
```

#Consultar commit especifico

```bash
git show 8cad26351851daaa0170a677724d590167236e6 
git show 8cad26351851daaa0170a677724d590167236e6 --name-only
git show 8cad26351851daaa0170a677724d590167236e6 --stat
git show 8cad26351851daaa0170a677724d590167236e6:services/order_services.py
git ls-tree 8cad26351851daaa0170a677724d590167236e6
git diff 8cad26351851daaa0170a677724d590167236e6 
```

Modificar el ultimo commit

```bash
git commit --amend -m "feat
```
