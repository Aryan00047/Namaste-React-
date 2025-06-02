In this episode we are learning to build react bundler without using npx-create-react.
Motive is to understand how npx-create-react works behind the scenes.

We use bundler to send code into production. One bundler is parcel others are like(vite, webpack0, etc.)

Also npm does not stands for node package manager - It manages the packages. Npm stands for everything but not node package manager.

npm i -D parcel --- D means development dependencies. Without D we use for production also.

^2.8.3 - ^ caret - it automatically upgrades to minor versions (2.8.5 - <3.0.0>)
~2.8.3 - ~ tilde - it automatically upgrades to major version but it is not safe to do so because code might break in major versions

package-lock.json is very important and its different from package.json. plj keeps the track of every version exactly and it ensures that in production also same exact version is used. pj can have caret but not in plj
and in plj in parcel object
we have "integrity": "sha512-.... this is hash

for example
in .json - parcel - ^2.8.5 currently in lock.json also parcel will be 2.8.5
But if a new update comes - 2.8.7 lock.json will update parcel - 2.8.7 but in .json parcel will remain 2.8.5 unless we update it manually

Node modules are very heavy and it is because - dependencies can have their own dependencies - this is knows as transitive dependencies.

package.json is like a configuration and node modules is kind of database that sores all the data required to run specific dependencies
