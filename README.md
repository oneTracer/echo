# echo

refactoring the old echo written in asp

## Tips

The workflow to be followed !!!!!
算了英文好麻烦
提交自己代码前，先拉去远程仓库最新的代码!

将工作区和暂存区的改动保存，然后pull代码
```
git stash
git pull 
```
拉下来的代码和自己暂存的代码会有冲突，解决之
```
git stash pop
```
然后提交自己的
```
git add
git commit -m "say something you have done"
git push origin master
```



## Project setup

```
yarn install
```

### Compiles and hot-reloads for development

```
yarn run serve
```

### Compiles and minifies for production

```
yarn run build
```

### Run your tests

```
yarn run test
```

### Lints and fixes files

```
yarn run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
