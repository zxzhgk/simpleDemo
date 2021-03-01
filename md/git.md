git checkout -b name origin/name 以原创分支创建分支

git reflog  查看每次git操作记录，可以取 commit id来还原操作 

git push a:a 推送本地a分支到远程a分支；如果远程不存在则会创建

git branch 要创建的本地分支名 远程分支名或tag

git push -u origin master 推送一个本地创建的项目至远程项目（本地初始化项目后建立git和远程仓库链接）

feat 增加新功能
fix 修复问题/BUG
style 代码风格相关无影响运行结果的
perf 优化/性能提升
refactor 重构
revert 撤销修改
test 测试相关
docs 文档/注释
chore 依赖更新/脚手架配置修改等
workflow 工作流改进
ci 持续集成
types 类型定义文件更改
wip 开发中

cmd下执行  certmgr.msc   windows 证书