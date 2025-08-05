In the command line we have individual commands. Each command can then be followed by arguments. For example we have the command ls. This will list the files in the directory. 
```
lucas@lucas-ThinkPad-L380-Yoga:~/Documents$ ls
 College_courses  'Ollama Getting Started.md'  'Tutorials getting Started.md'
 Images            Tutorials
```

But if we want we can follow ls with the arguement `-la` the l stands for long list format (or long) and the a stands for all:
```
lucas@lucas-ThinkPad-L380-Yoga:~/Documents$ ls -la
total 28
drwxr-xr-x  5 lucas lucas 4096 May  2 09:51  .
drwxr-xr-x 56 lucas lucas 4096 May  1 13:49  ..
drwxrwxr-x  4 lucas lucas 4096 May  1 13:52  College_courses
drwxrwxr-x  2 lucas lucas 4096 May  1 13:33  Images
-rw-rw-r--  1 lucas lucas 2710 May  2 10:48 'Ollama Getting Started.md'
drwxrwxr-x  9 lucas lucas 4096 May  2 11:19  Tutorials
-rw-rw-r--  1 lucas lucas 1117 May  2 11:04 'Tutorials getting Started.md'
```

This looks a bit different we have a list of files and each file has some information on it. There is the part where it says `drwxr-xr-x` or something like that. Then it says a number `5` then it says `lucas lucas`. Then it says `4096` and a date and time; And finally it says something that looks like the file name. 

So what does this drwxr thing mean. Well each file has permissions that allow certian users to use them or not. The first charater shows the file type this can be `d` for directory; `-` for a regular file or `l` for symbolic link.

Then after that it lists the file permissions for the owner this is the next three charaters `rwx`. `r` indicates read only permissions if the owner does not have read permissions this will be a `-`. Next is write (or edit) if the owner has write permissions there will be a `w` likewise a `-` if they do not have permissions. Finally there is `x` or execute this means can the user run the file as a program. This is more for code files basically code files tell the computer to do a series of things.  To better understand this: let's look at the command `hello`.

I wrote this command myself. Try it out, then let's open this file in gedit. Type the following into the terminal:
`gedit ~/bin/hello`
This should open a window of gedit. Unless you are on wsl in which case you should use nano see nano getting started. You should see a file with one line: `echo 'hello'`. `echo` is the bash command for tell me essentially and then it is followed by hello in quotes. The quotes tell the computer when to start and stop reading. They are kind of like bookmarks. Everything between the quotes is called a string. Strings are a common type of data computers use. You can change this string to `'hello world'` and we can rerun the command.

This is basically the simplest of code files or programs. But I digress, let's get back on topic. After the owner permissions there are the Group permissions (those are the next 3 letters), and finally there are the user permissions.

Next that number is the number of links to the current file. After that there is the user and group of the file owner. I made most of these files so it is mostly lucas lucas. If you are curious which user you are you can use the ```$ whoami``` command. If you want to know who is logged into the terminal (and when they logged in) you can type the ```$ who``` command. The ```$ w``` command also works.

Now looking back at our ```$ls -la``` output:
```
lucas@lucas-ThinkPad-L380-Yoga:~/Documents$ ls -la
total 28
drwxr-xr-x  5 lucas lucas 4096 May  2 09:51  .
drwxr-xr-x 56 lucas lucas 4096 May  1 13:49  ..
drwxrwxr-x  4 lucas lucas 4096 May  1 13:52  College_courses
drwxrwxr-x  2 lucas lucas 4096 May  1 13:33  Images
-rw-rw-r--  1 lucas lucas 2710 May  2 10:48 'Ollama Getting Started.md'
drwxrwxr-x  9 lucas lucas 4096 May  2 11:19  Tutorials
-rw-rw-r--  1 lucas lucas 1117 May  2 11:04 'Tutorials getting Started.md'
```
Next is a mysterious number. I'll just spoil the secret for you this is the file size. Notice for a lot of these it is the same 4096. This is because the directories (or folders) aren't actually the size of the contents but rather take up a preset size where information on the contents is stored. This information is also known as metadata. Metadata is information on other data. It's kind of like a phone number it doesn't really mean anything but it let's you know how to access something important. In other words, a phone number doesn't tell you anything but it tells you how to call someone who might be able to tell you things.

Next up we have the date and time the file was created. And finally is the file name some of these files are in quotes as explained in ```Command_Line_Getting_Started.md```




