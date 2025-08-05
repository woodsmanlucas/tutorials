This is a good tutorial to start with we will go over the basics of the command line. So lets open a terminal window and begin.

First if you want to know where you are in the terminal you can ask the computer and it will tell you. The command for this is pwd. This stands for print working directory. So lets try it out:
```$ pwd```

Your output should look something like this: 
```
lucas@lucas-Thinkpad-L380-Yoga:~$ pwd
/home/lucas
lucas@lucas-Thinkpad-L380-Yoga:~$
```

Well that's great but what does it mean?

Well lucas is your username and that is @ our computer which is lucas-Thinkpad-L380-Yoga. It actually says thinkpad on it behind the wilderness medicine sticker (and the letter i flashes). So basically in the green is the who and the what.

Now in the white is the output of the command. Basically the computers response to the pwd query. This is where it says `/home/lucas`. If it doesn't say this type:
```
$cd ~
$pwd
```
We will go over the cd command next (kind of a sneak peek).

Anyways back to our output `/home/lucas` this is where we are on the computer the first slash tells us we are starting in the root directory `/` and then go to the home directory. Then the next slash tells us 'the next directory is' and then it says lucas. Therefore we are at home and lucas.

Now the next part will make you cringe. The blue part after the computer actually tells us where we are `~` is an abbrivation for `/home/lucas` or more specifically the home directory of the current user.

Okay so now that we know where we are we can move around. To do this we use the cd command which is short for change directory. Let's move to the Documents folder (This is probably where you are in the files application also know as natalius). To do this type `$ cd Documents` if you get tried of typing sometimes the computer can autocomplete (unless it's not sure what you're asking). Type `$ cd Doc` and then press tab. It should autocomplete to `$ cd Documents` (If you already typed `cd Documents` you can go back by using the command `cd ~`)

Now that we are in the documents folder we can see what documents we have. Type `ls` which stands for list and you should get an output like this:
``` 
lucas@lucas-ThinkPad-L380-Yoga:~/Documents$ ls
 College_courses  'Ollama Getting Started.md'  'Tutorials getting Started.md'
 Images            Tutorials
lucas@lucas-ThinkPad-L380-Yoga:~/Documents$ 
```

Basically its just a list of all the things in the folder. There are three items in blue College_courses, Images and Tutorials. These are the folders. If you don't believe me look in the Documents folder in the files application. And then in white we have our files: Ollama Getting Started.md and Tutorials getting Started.md. But why are they in quotes? Well the file names have spaces in them so if they weren't in quotes we might think Ollama Getting Started.md was three different files: Ollama, Getting, and Started.md. That is why this file has underscores instead of spaces. When looking at files it's important to notice the extension: this file ends in .md so it's file type is markdown. There are lots of different file types and extensions: .txt is a text file, .doc is a word document file, .pdf stands for personal document format, .png stands for portable network graphics, .jpeg is an image file as well, .gif is graphics interchange format, and the list goes on and on.