import Ember from 'ember';

export default Ember.Component.extend({

    currentRoute:'',

	actions:{

        addStudent(){
            var studentForAdd = {
                name: this.get('student').get('name'),
                course: this.get('student').get('course'),
                city: this.get('student').get('city'),
                enrollment: this.get('student').get('enrollment'),
                gpa: this.get('student').get('gpa'),
                imageURL: this.get('student').get('imageURL')
                };
            this.sendAction('createStudent', studentForAdd);
        },

        editStudent(){
            var studentForEdit = {
                name: this.get('student').get('name'),
                course: this.get('student').get('course'),
                city: this.get('student').get('city'),
                enrollment: this.get('student').get('enrollment'),
                gpa: this.get('student').get('gpa'),
                imageURL: this.get('student').get('imageURL')
                };

            this.sendAction('updateStudent', studentForEdit);
        },

        determineAction(){
            if(this.currentRoute === "addStudent"){
                this.send('addStudent');
            }
            else if(this.currentRoute === "editStudent"){
                this.send('editStudent');
            }
        }

	}
});
