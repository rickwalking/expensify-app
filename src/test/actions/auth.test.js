import { login, logout } from '../../actions/auth';

test('should login', () => {
    const action = login('123abc');

    expect(action).toEqual({
        type: 'LOGIN',
        uid: '123abc',
    });
});

test('should login', () => {
    const action = logout();

    expect(action).toEqual({
        type: 'LOGOUT',
    });
});