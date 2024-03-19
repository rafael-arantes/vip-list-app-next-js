In this setup:

The ListMember model has an auto-generated ID (@id @default(cuid())), a name, an email (which is unique to ensure each ListMember has a distinct email), and a relation to the List model through the ListMemberList model.
The List model represents the lists that a ListMember can be part of. It has a relation to the ListMember model through the ListMemberList model.

The ListMemberList model is the relation table that connects ListMember to List. It has a composite primary key consisting of listId and listMemberId (@@id([listId, listMemberId])), ensuring that each combination of a list and a list member is unique.

This structure allows a ListMember to be related to multiple List items and vice versa, establishing a many-to-many relationship between ListMember and List.

async function createListMember(name, email) {
const newListMember = await prisma.listMember.create({
data: {
name: name,
email: email,
// Assuming you want to associate this ListMember with an existing List
// You would need to provide the listId of the existing List
lists: {
create: {
listId: "existingListId", // Replace "existingListId" with the actual ID of the List
},
},
},
});

return newListMember;
}

// Example usage
createListMember("John Doe", "john.doe@example.com")
.then(listMember => console.log("Created ListMember:", listMember))
.catch(error => console.error("Error creating ListMember:", error));
