# Problem Statement
Implement the command
## Wcat 🚀🚀 

It is used to display or make a copy content of one or more files in terminal 

## Commands:
* wcat filepath => displays content of the file in the terminal 
* wcat filepath1 filepath2 filepath3 => displays content of all files in the terminal(concatinated form) in the given order. 
* wcat -s filepath => convert big line breaks into a singular line break 

* wcat -n filepath => give numbering to all the lines 
* wcat -b filepath => give numbering to non-empty lines  

We can mix and match the options.

## Edge cases:

* If file entered is not found then it gives file does not exist error.
* -n and -b are 2 options available together then command should give you an error


## Demo
https://drive.google.com/file/d/1LPuYX79FkJcuLRV_DdjlClWHSTO_6Uku/view?usp=sharing