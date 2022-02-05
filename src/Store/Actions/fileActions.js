export const UploadImage = (payload) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        console.log(payload, 'paylaod <<<')
        const firebase = getFirebase();
        const firestore = getFirestore();
        console.log(firebase, 'firebase <<<')
        console.log(firestore, 'firestore <<<')
        const uploadImage = firebase.storage.ref(`images/${payload.name}`).put(payload)
        uploadImage.on('state_changes', (snapShot) => {
            console.log(snapShot, 'snapShot <<<')
        }, (err) => {
            console.log(err, 'error FB storage <<<')
        },() => {
            firebase.storage.ref('images').child(payload.name).getDownloadURL().then(imgUrl => {
                return imgUrl;
            }).catch(err => {
                console.log(err, 'error from URL <<<')
            })
        })
    };
};
