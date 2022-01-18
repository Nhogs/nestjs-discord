import {DynamicModule, Module} from "@nestjs/common";
import {DISCORD_CONFIG} from "./discord.constants";
import {DiscordConfig} from "./interface";

@Module({})
export class DiscordModule {
  static forRoot(config: DiscordConfig): DynamicModule {
    return {
      module: DiscordModule,
      global: true,
      providers: [
        {
          provide: DISCORD_CONFIG,
          useValue: config,
        },
      ],
      exports: [],
    };
  }
}
