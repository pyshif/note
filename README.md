## GitHub Flow 流程控制

// Git Flow (main, develop, release, feature, hotfix)
// GitHub Flow (main, ...)
// GitLab Flow (mix)

### 五個階段

// main
// feat-login , feature/login
// fix/login
// hotfix/login

// commit 1,
// push
// pull request

1. 創建分支 (Create a branch)
2. 提交修改 (Add commits)
3. 開啟 PR (Open a Pull Request)
4. 代碼審核 (Discuss and review your code)
5. 部屬 (Deploy) ---> 我們不會有這個階段
6. 合併 (Merge)

-   main
-   feature

###### 參考資料

-   https://awdr74100.github.io/2020-05-11-git-githubflow/
-   https://medium.com/@lf2lf2111/三種版控流程-29c82f5d4469
-   https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-and-deleting-branches-within-your-repository
-   https://heidiliu2020.github.io/git-commit-message/

## 分支 Branch

### main

-   此分支只能使用 Pull Request 來合併大家的筆記。（至少通知另外一位組員 Review 後才 Merge）
-   創建主題

### 主題分支

<grouping tokens>
<主題檔案名>/<組員名>

-   feature/login

-   db-normalization/pyshif
-   db-join/pyshif
-   ...

### 原則

-   盡可能地自己思考下 Git 指令，下錯搞壞解決就好，最差就重拉一個庫就解決。

    > 這樣的方式不是一個很好的共筆方式，只是為了讓大家能夠有動機來實際操作、模擬未來我們大專版控的流程。

-   檔案的命名

    > 建議：分類名稱 + 主題名稱。

-   提交頻率
    > 每篇筆記下方都會有團隊成員簽署姓名的地方，所以如果團隊成員沒有撰寫筆記仍然需要簽署上自己的名字進行提交、合併，讓大家一定都練習得到 Git、GitHub 操作。(每個團隊成員每篇筆記至少會 pull 一次、merge 一次、commit 一次、送出 Pull Request 一次)

### 分支 Branch

git 分支命名規範
在瞭解分支命名資料時，看到一篇 StackoverFlow 的 git branch naming best practices 討論，覺得解答者 phord 提供的建議非常不錯，簡單翻譯筆記一下。

分支開頭使用群組標記(grouping tokens)。
定義和使用簡短標記來區別分支結構對您的工作流是有意義的
使用斜線(斜杠)來分隔您的分支名稱部分
請不要使用純粹的數字作為主導部分
避免使用較長的描述性名稱為長生命週期的分支命名
