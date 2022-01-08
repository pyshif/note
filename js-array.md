# JavaScript: Array

## Table Content

[TOC]

## Array API

### [every(callbackFn [, thisArg]): boolean]()

-   #### description
    遍歷陣列內每一個 element (元素)，檢查是否符合條件。全部都符合返回 `true`，其中一個不符合就返回 `fasle`。
-   #### callbackFn(element [, index] [,array]): boolean

    -   ##### arguments

        -   element

            當前傳入元素

        -   [index]

            當前元素索引值

        -   [array]

            陣列址參器

    -   ##### return

        -   boolean 值，當前元素符合自定義條件返回 `true`，反之返回 ｀ false`

-   #### thisArg

    接收一個 `this`，該 `this` 會作用於 callbackFn 中

-   #### return

    -   `true`

        全部元素都符合自定義條件時則返回

    -   `false`

        其中一個元素不符合直接返回

-   #### Example
    ```=javascript
    var number = [1, 3, 5, 7, 9];
    var areOdd = number.every(element => element % 2 !== 0);
    ```
