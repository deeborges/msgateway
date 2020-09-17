import ApplicationListener from './config/Server';

ApplicationListener.listen(3000, () => {
    console.log('listenning in port 3000');
});