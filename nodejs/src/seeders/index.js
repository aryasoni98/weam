const seedService = require('../services/seeder');
const logger = require('../utils/logger');

async function initSeed () {
    try {
        logger.info('Starting database seeding process...');
        
        await seedService.seedEmailTemplate();
        await seedService.seedRole();
        await seedService.seedAdmin();
        await seedService.seedNotification();
        await seedService.seedSetting();
        await seedService.seedDefaultModel();
        await seedService.seedCustomGPT();
        await seedService.seedPrompt();
        await seedService.seedOtherRolePermission();
        await seedService.seedCountry();  
        await seedService.seedSuperSolutionApps();
        
        logger.info('Database seeding completed successfully! 🎉');
    } catch (error) {
        logger.error('Critical error in initSeed function - seeding failed:', error);
        throw error; // Re-throw to ensure the application startup fails if seeding fails
    }
}

module.exports = initSeed;