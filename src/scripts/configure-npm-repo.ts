/**
 * Documentation of
 * the script *which*
 * explains what it <b>does</b>.
 *
 * @example abc
 */

const packageJson = await utils.node.getPackageJson();

const name = await ask.text("name,n", "What is the name of the package?", packageJson.name);
const description = await ask.text("description,d", "What is the description of the package?", packageJson.description);
const topics = (
  await ask.text("topics", "What are the tags of the package (comma seperated)?", packageJson.tags?.join(", "))
)
  .split(",")
  .map((topic) => topic.trim());

const userName = (await $`git config --global user.name`).stdout;
const email = (await $`git config --global user.email`).stdout;

const author = await ask.text("a,author", "What is the author of the package?", `${userName} <${email}>`);
const license = await ask.text("l,license", "What is the license of the package?", packageJson.license);

if (!(await ask.confirm("The values will both be synced to the package.json and the Github Repo configuration."))) {
  process.exit(0);
}

const repository = (await $`git config --get remote.origin.url`).stdout;

await utils.node.amendPackageJson({
  name,
  description,
  tags: topics,
  author,
  license,
  repository,
});

await $`gh repo edit --add-topic=${topics.join(",")}`;
await $`gh repo edit --description=${description}`;
