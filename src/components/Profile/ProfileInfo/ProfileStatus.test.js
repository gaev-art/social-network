 import React from 'react';
 import {create} from 'react-test-renderer';
 import ProfileStatus from './ProfileStatus';


 describe("ProfileStatus component", () => {
     test("status from props should be in the state", () => {
         const component = create(<ProfileStatus status="status" />);
         const instance = component.getInstance();
         expect(instance.state.status).toBe("status");
     });

     test("after creation <input> should not be displayed ", () => {
         const component = create(<ProfileStatus status="status" />);
         const root = component.root;
         expect(()=>{
             let input = root.findByType('input')
         }).toThrow();
     })

     test("after creation <span> should be displayed with correct status", () => {
         const component = create(<ProfileStatus status="status" />);
         const root = component.root;
       const span = root.findByType('span')
         expect(span).not.toBeNull();
     })

     test("after creation <span> should contains correct status", () => {
         const component = create(<ProfileStatus/>);
         const root = component.root;
       const span = root.findByType('span')
         expect(span.children[0]).toBe('Status: ');
     });


     test("input should be displayed in editMode instead of span ", () => {
         const component = create(<ProfileStatus status="status" />);
         const root = component.root;
         const span = root.findByType('span')
         span.props.onDoubleClick()
         let input = root.findByType('input')
         expect(input.props.value).toBe('status');
     });
 });