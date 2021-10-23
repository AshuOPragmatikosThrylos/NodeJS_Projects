# Problem Statement
Implement the command
## Wcat 🚀🚀 

It is used to display or make a copy content of one or more files in terminal 

## Commands:
1- wcat filepath => displays content of the file in the terminal 
2- wcat filepath1 filepath2 filepath3 => displays content of all files in the terminal(concatinated form) in the given order. 
3- wcat -s filepath => convert big line breaks into a singular line break 

4- wcat -n filepath => give numbering to all the lines 
5- wcat -b filepath => give numbering to non-empty lines  

We can mix and match the options.

## Edge cases:

1- If file entered is not found then it gives file does not exist error.
2- -n and -b are 2 options available together then command should give you an error


## Demo
https://drive.google.com/file/d/1LPuYX79FkJcuLRV_DdjlClWHSTO_6Uku/view?usp=sharing