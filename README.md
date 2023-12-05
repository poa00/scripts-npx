# @lukasbach/scripts

> Collection of easy-to-use scripts and tools

This is a collection of various small CLI scripts and tools, that I might available for easy use.
The scripts are deployed as NPM package, so you can call them with `npx` or install them globally with
`npm`. Most of the scripts relate to repetitive tasks with NodeJS and React development, such as setting
up certain frameworks or scaffolding files, but there are other scripts such as ffmpeg tasks or
file system utilities.


You can find a full list of available scripts on [scripts.lukasbach.com](https://scripts.lukasbach.com).

Use the command listed on each script page to run it:

```
npx @lukasbach/scripts react/fc
```

Alternatively, you can install the tool globally and run the scripts with `ldo`:

```
npm i -g @lukasbach/scripts
ldo react/fc
```

Some scripts also have shortcuts. For example, the `react/fc` script can also be run with `ldo fc`.
You can edit shortcuts with `ldo edit-shortcuts`. All shortcuts that are available by default
are listed in the [shortcuts.md](./shortcuts.md) file.

It is also possible to call the script without any parameters, and it will interactively search all
available scripts.
